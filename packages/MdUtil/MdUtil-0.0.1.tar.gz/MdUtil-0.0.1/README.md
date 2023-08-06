# MdUtil

**MdUtil** is an open-source python package that helps you work with markdown
Do note that this library is under development and it is common if you find a bug. If you do, you can [report a bug](https://github.com/MdUtil/issues/new/choose)
Another reason this library is open-source is because you can contribute to it and prettify it! Instructions to contributing can be found on the [contributing guide]
This library is licensed under the [mit license](https://en.wikipedia.org/wiki/MIT_License) and the license file is located inside of the [LICENSE file](https://github.com/MdUtil/blob/master/LICENSE)

## Installation

This library is available to the world through PyPi. You can install this library as a project dependency using a command as simple as this:

```py
pip install MdUtil
```

After you install it, you can include it as a project dependency and use it freely across your code:

```py
import parseMd from MdUtil
from django.shortcuts import render


def home(request):
    return render(parseMd("""
    # Hello World!
    ### Welcome to [my site](https://website.com)!
    """))
```
