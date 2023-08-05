"""
Main interface for pinpoint-sms-voice service.

Usage::

    import boto3
    from mypy_boto3.pinpoint_sms_voice import (
        Client,
        PinpointSMSVoiceClient,
        )

    session = boto3.Session()

    client: PinpointSMSVoiceClient = boto3.client("pinpoint-sms-voice")
    session_client: PinpointSMSVoiceClient = session.client("pinpoint-sms-voice")
"""
from mypy_boto3_pinpoint_sms_voice.client import (
    PinpointSMSVoiceClient as Client,
    PinpointSMSVoiceClient,
)


__all__ = ("Client", "PinpointSMSVoiceClient")
