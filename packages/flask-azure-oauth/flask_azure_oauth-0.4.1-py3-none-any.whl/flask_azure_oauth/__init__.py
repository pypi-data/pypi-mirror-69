import requests

from flask import Flask as App

from flask_azure_oauth.resource_protector import ResourceProtector
from flask_azure_oauth.tokens import AzureTokenValidator, AzureToken
from flask_azure_oauth.keys import TestJwk


class FlaskAzureOauth(ResourceProtector):
    def __init__(self):
        super().__init__()

        self.validator = None

        self.azure_tenancy_id = None
        self.azure_application_id = None
        self.azure_client_application_ids = []
        self.jwks = {}

    def init_app(self, app: App):
        """
        Initialises extension using settings from the Flask application

        :type app: App
        :param app: Flask application
        """
        self.azure_tenancy_id = app.config["AZURE_OAUTH_TENANCY"]
        self.azure_application_id = app.config["AZURE_OAUTH_APPLICATION_ID"]
        self.azure_client_application_ids = app.config["AZURE_OAUTH_CLIENT_APPLICATION_IDS"]
        self.jwks = self._get_jwks(app=app)

        self.validator = AzureTokenValidator(
            azure_tenancy_id=self.azure_tenancy_id,
            azure_application_id=self.azure_application_id,
            azure_client_application_ids=self.azure_client_application_ids,
            azure_jwks=self.jwks,
        )

        self.register_token_validator(self.validator)

    def _get_jwks(self, app: App) -> dict:
        """
        Retrieves a JSON Web Key Set (JWKS)

        JWKS allow token providers to advertise the keys that will be used to sign JSON Web Tokens (JWTs) in a dynamic
        and machine readable way. Normally keys are fetched from the configured Azure tenancy, and will change
        periodically. In testing (app.config['TESTING'] == True), we don't want to use real tokens/keys so a
        'self-signed' JWKS is generated.

        :type app: App
        :param app: Flask application

        :rtype dict
        :return: JSON Web Key Set
        """
        if "TESTING" in app.config and app.config["TESTING"]:
            test_jwks = TestJwk()
            app.config["TEST_JWKS"] = test_jwks
            return test_jwks.jwks()

        jwks_request = requests.get(f"https://login.microsoftonline.com/{self.azure_tenancy_id}/discovery/v2.0/keys")
        jwks_request.raise_for_status()
        return jwks_request.json()

    def introspect_token(self, *, token_string: str) -> dict:
        """
        Returns details about the current (Azure) JSON Web Token for reference/debugging

        Includes support for RFC 7662 https://tools.ietf.org/html/rfc7662

        :param token_string: str
        :return: (Azure) JWT as a base64 encoded string (i.e. the value of the Authorization header)

        :rtype dict
        :return: Token properties, including formatted scopes and meta information for claims
        """
        token = AzureToken(
            token_string=token_string,
            azure_tenancy_id=self.azure_tenancy_id,
            azure_application_id=self.azure_application_id,
            azure_client_application_ids=self.azure_client_application_ids,
            azure_jwks=self.jwks,
        )
        return token.introspect()

    def introspect_token_rfc7662(self, *, token_string: str) -> dict:
        """
        Returns details about the current token for reference/debugging

        Implements RFC 7662 https://tools.ietf.org/html/rfc7662

        :rtype dict
        :return: Token properties, formatted as per RFC 7662
        """
        token = AzureToken(
            token_string=token_string,
            azure_tenancy_id=self.azure_tenancy_id,
            azure_application_id=self.azure_application_id,
            azure_client_application_ids=self.azure_client_application_ids,
            azure_jwks=self.jwks,
        )
        return token.introspect_rfc7662()
