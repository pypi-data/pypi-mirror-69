# Mini_VK

A  module Python, small wrapper over the VK API

## Installation

To install the latest release on PyPI, simply run:

`pip install mini-vk`

Or to install the latest development version, run:

`pip install git+https://github.com/SemenovAV/mini_vk`

## Quick Tutorial

`api.get_api` takes in a string containing access token vk 

```python
from mini_vk.api import get_api

api = get_api(access_token)
response = api.users.get(user_id=1).text  

```
response: 
```json
{"response":[{"id":1,"first_name":"Павел","last_name":"Дуров","is_closed":false,"can_access_closed":true}]}
``` 
