from django.db import models


class Clients(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    generic_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20, unique=True, verbose_name='номер телефона')

    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = 'Клиенты'
