# Python library for Customers Mail Cloud

https://smtps.jp/

## Usage

```py
from CustomersMailCloud.Client import CustomersMailCloud
client = CustomersMailCloud('aaa', 'bbb')

client.trial()
client.addTo('John Doe', 'john@example.com')
client.setFrom('Admin', 'info@example.com')
client.subject = 'Mail subject'
client.text = 'Mail text'

try:
    client.send()
except Exception as e:
    print(e)
```

### Add attachment

```py
client.addFile('/path/to/file1')
client.addFile('/path/to/file2')
```

## License

MIT

