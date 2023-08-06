Send SMS messages through GoSMS API.

# Installation

    pip install gosmscz

# Usage

```
from gosmscz import send_batch_sms

send_batch_sms(
    client_id: 'vaseId',
    client_secret: 'vasSecret',
    message: 'Sms zprava k odeslani',
    recipients: ['+420777000111', '+420777222333']
)
```

