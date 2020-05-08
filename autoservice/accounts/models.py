from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    generic_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=18)
