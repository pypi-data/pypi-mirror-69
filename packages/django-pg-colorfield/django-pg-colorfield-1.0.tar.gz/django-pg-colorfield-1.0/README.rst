============================
Django Postgresql ColorField
============================

A ColorField to save and filter by radius Colors in RGB array in postgresql.



# Installation

```
pip install django-pg-colorfield
```

## Quick start

1. Add colorfield to your INSTALLED_APPS setting like this:

```py
INSTALLED_APPS = [
    ...
    'colorfield',
]
```

2. Import and Use ColorField:

To get search features you have to add **ColorManager** with your model.

```py
from django.db import models
from colorfield_lib.colorfield import fields

class ColorManager(fields.ColorManager, models.Manager):
    # You can put your queryset staff
    pass

class ColorModel(models.Model):
    color = fields.ColorField(null=True, blank=True)

    objects = ColorManager() 
```

3. Filtering field.

* **field="color"** filed that you want to search.
* You can also pass as **color="[1, 100, 200]"** ro **color="#0164C8"**.
* **radius=10** is a margin you consider to search.

```py
queryset = ColorModel.objects.by_radius(
    ...
    field="color",
    color=[1, 100, 200],
    radius=10,
)
```
