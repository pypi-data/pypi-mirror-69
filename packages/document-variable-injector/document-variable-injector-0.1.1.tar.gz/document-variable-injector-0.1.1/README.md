# Document argument injector

Provides a simple helper method

Argument(s):
- document      (str)   the document loaded as a string
- params        (dict)  key,value == match,replacement
- encapsulation (str)   variable encapsulation ('leftisde', 'rightside')

Returns the provided document with injected parameters

## Usage

```py
from injector import injector

document: str
with open('profile.html', 'r') as file:
    document = file.read()

payload: dict = {
    'user.firstName': 'John',
    'user.lastName': 'Smith',
    'user.email': 'jsmith@example.com',
    'user.phone': '+555111444'
    'user.postcode': '1234 Town',
    'user.address': '12 Street'
}

injector(
    document=document,
    params=params,
    encapsulation=('{', '}')
)
```