from django.db.models import *

class Company(Model):
    name = CharField(max_length = 50)
    description = TextField()
    city = CharField(max_length = 50)
    address = TextField()

class Vacancy(Model):
    name = CharField(max_length = 50)
    description = TextField()
    salary = FloatField()
    company = ForeignKey(Company, on_delete = CASCADE)