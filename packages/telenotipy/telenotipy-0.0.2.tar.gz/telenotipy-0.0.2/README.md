# HumanTech - Telegram Notification - Python Client

## How to install

```
$ pip install telenotipy
```

## How to use

1) Create a new TelegramNotificationClient with your API token
```python
from telenotipy import TelegramNotificationClient
client = TelegramNotificationClient('API TOKEN')
```

The token must be retrieved from the TeleNotiPy server instance.

2) Send notifications to your users!
```python
client.send_notification(
	to=['UserID1', 'UserID2']
	message="Hi from My Application"
)
```

---

## Simple flow

1) First you want to send a subscription to a Telegram User
```python
from telenotipy import TelegramNotificationClient

client = TelegramNotificationClient('MY API TOKEN')

subscription = client.create_subscription()

# Send subscription.id to a Telegram user
# The user must send the command /start followed by this token to the bot
# This can be simplified by giving the user a Start link:
# - https://telegram.me/MyTeleNotiPyBot?start=TheSubscriptionID
```

2) Then you might want to check if the user has accepted the subscription
```python
from telenotipy import TelegramNotificationClient

client = TelegramNotificationClient('MY API TOKEN')

subscription = client.get_subscription(the_subscription_id)

print(subscription.is_bound)
# If the subscription is bound, it means that the user has accepted
```

3) You want to send notifications to one or more Telegram Users
```python
from telenotipy import TelegramNotificationClient

client = TelegramNotificationClient('MY API TOKEN')

client.send_notification(
	to=[the_subscription_id_1, the_subscription_id_2, ...]
	message="Hi, here is my message!"
)
```

---

## Advanced usage

### Use a different server
```python
client = TelegramNotificationClient('API TOKEN', 'The telenotipy server address')
```

### Create a new subscription
```python
subscription = client.create_subscription()
subscription.id # The User Token
subscription.is_bound # Whether the subscription is bound to a Telegram User, is False when creating
```

### List your existing subscriptions
```python
subscriptions = client.list_subscriptions(page=1)
subscriptions.previous_page # The Previous page number
subscriptions.next_page # The Next page number
subscriptions.count # The total count of subscriptions (all pages)
subscriptions.results # The list of subscriptions
```

### Get the info about an existing subscription
```python
subscription_id = 'The Subscription ID'

subscription = client.get_subscription(subscription_id):
subscription.id # The User Token
subscription.is_bound # Whether the subscription is bound to a Telegram User
```

### Delete an existing subscription
```python
subscription_id = 'The Subscription ID'

client.delete_subscription(subscription_id):
```
