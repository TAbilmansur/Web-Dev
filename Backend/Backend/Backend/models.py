from django.db import models
from django.db.models import *

class Product(models.Model):
    name = CharField(max_length = 50)
    price = FloatField()
    description = TextField()
    count = IntegerField(default = 1)
    is_active = BooleanField(default = True)
    category = CharField(max_length = 50)

class Category(models.Model):
    name = CharField(max_length = 50)