import base64
import json
import os
from typing import Optional

import boto3
from botocore.exceptions import ClientError


def get_secret(
        secret_name: str,
        env_var: Optional[str] = None,
        default_value: Optional[dict] = None,
        is_environment_controlled: bool = True
) -> dict:
    """
    Gets a secret from the follow priority order:
    * From AWS Secrets Manager
    * The Environment Variable of the system
    * The default value provided

    :param secret_name: The name of the secret in AWS Secrets Manager.
    :param env_var: (Optional) The environment variable name.
    :param default_value: (Optional) The default value. Default value is `None`
    :param is_environment_controlled: (Optional) `True` if enabling environment controlled secrets fetching.
                                      If enabled, it will only get the secret from AWS Secrets Manager if in production.
    :return: The dictionary of secrets.
    """

    stage = os.environ.get("PROPERLY_STAGE", None)
    print(stage)
    secret = None

    # If the environment is prod, then go to AWS Secrets Manager. Otherwise skip it.
    if stage == "prod" or not is_environment_controlled:
        # Try to get the secret from AWS Secrets Manager
        secret = get_from_secrets_manager(secret_name)

    if secret is not None and len(secret) > 0:
        # We actually got a secret!
        return json.loads(secret)

    if env_var is None:
        # An environment variable is not specified. Exit early.
        return default_value

    # Try to get the secret from the environment variable
    secret = os.environ.get(env_var)

    if secret is not None and len(secret) > 0:
        # We actually got a secret!
        return json.loads(secret)

    return default_value


def get_from_secrets_manager(secret_name: str) -> Optional[str]:
    """
    Gets the secret from AWS Secrets Manager.
    This code is mostly supplied by AWS.

    :param secret_name: The name of the secret.
    :return: The string representation of the secret value.
    """
    region_name = "us-east-1"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name="secretsmanager",
        region_name=region_name
    )

    # In this sample we only handle the specific exceptions for the "GetSecretValue" API.
    # See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    # We rethrow the exception by default.

    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        if e.response["Error"]["Code"] == "DecryptionFailureException":
            # Secrets Manager can"t decrypt the protected secret text using the provided KMS key.
            # Deal with the exception here, and/or rethrow at your discretion.
            raise e
        elif e.response["Error"]["Code"] == "InternalServiceErrorException":
            # An error occurred on the server side.
            # Deal with the exception here, and/or rethrow at your discretion.
            raise e
        elif e.response["Error"]["Code"] == "InvalidParameterException":
            # You provided an invalid value for a parameter.
            # Deal with the exception here, and/or rethrow at your discretion.
            raise e
        elif e.response["Error"]["Code"] == "InvalidRequestException":
            # You provided a parameter value that is not valid for the current state of the resource.
            # Deal with the exception here, and/or rethrow at your discretion.
            raise e
        elif e.response["Error"]["Code"] == "ResourceNotFoundException":
            # We can"t find the resource that you asked for.
            # Deal with the exception here, and/or rethrow at your discretion.
            return None
    else:
        # Decrypts secret using the associated KMS CMK.
        # Depending on whether the secret is a string or binary, one of these fields will be populated.
        if "SecretString" in get_secret_value_response:
            secret = get_secret_value_response["SecretString"]
            return secret

        secret = base64.b64decode(get_secret_value_response["SecretBinary"])
        return secret
