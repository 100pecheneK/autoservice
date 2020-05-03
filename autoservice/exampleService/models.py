from django.db import models


class ExampleService(models.Model):
    title = models.CharField(max_length=100)
