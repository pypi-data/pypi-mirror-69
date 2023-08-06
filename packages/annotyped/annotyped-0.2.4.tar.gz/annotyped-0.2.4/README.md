# annotyped


Annotyped is a simple library with utilities and decorators for type checking and type casting automatically
on annotated functions at runtime.


`pip install annotyped --user`


## The basics

```py
# Simple typecheck, this uses the instance checker to check equality.
# You can set your own with `@annotyped.checkers.custom(callable)`


@annotyped.check
def add(a: int, b: int) -> int:
   return a + b


add(1, 2)      # 3
add(2, '10')   # Param 'b' requires type '<class 'int'>', found '<class 'str'>': '10'


# Simple typecast, this runs the annotation like it were an expression and uses the 
# result  `annotation(value)`

@annotyped.cast
def add(a: int, b: int) -> str:
   return a + b


add('10', '20')   # '30'
add(1, 2)         # '3'
add('1.1', 2)     # Param 'a' could not convert to '<class 'int'>' from '<class 'str'>': invalid literal for int() with base 10: '1.1'
```

## Custom converters / casters

eg:

Convert from a tuple or a str into namedtuple.


```py
import annotyped                                         
import math                                              
from collections import namedtuple                       

Position = namedtuple('Position', 'x, y')                


def position(pos):
   if isinstance(pos, str) and ',' in pos:
      pos = map(int, pos.split(','))
   return Position(*pos)


@annotyped.cast
def diff(p1: position, p2: position):                    
   return math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2)


p1 = (10, 20)
p2 = '20,50'

print( diff(p1, p2) )
```
