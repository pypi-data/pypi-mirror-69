## Crack

Crack tools all here!

Currently support custom base64, other will be coming soon.

Thanks for use.


### How to use
#### Base64
```python
import crack


crack.b64encode(b"leesoar.com", b64_map="9240gsB6PftGXnlQTw_pdvz7EekDmuAWCVZ5UF-MSK1IHOchoaxqYyj8Jb3LrNiR")
# Return: DBvFmjNVmZb5DjY=

crack.b64decode("DBvFmjNVmZb5DjY=", b64_map="9240gsB6PftGXnlQTw_pdvz7EekDmuAWCVZ5UF-MSK1IHOchoaxqYyj8Jb3LrNiR")
# Return: b'leesoar.com'
```


#### Array's partition
```python
import crack


[print(x, end=", ") for x in crack.partition("gmapi.cn", size=3)]
# Print: gma, pi., cn, 


[print(x) for x in crack.partition(["g", "m", "a", "p", "i", ".", "c", "n"], size=3)]
# Print: ['g', 'm', 'a'], ['p', 'i', '.'], ['c', 'n'], 
```
