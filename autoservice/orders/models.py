from django.db import models
from clients.models import Clients


class Orders(models.Model):
    client = models.ForeignKey(Clients, on_delete=models.CASCADE, null=True)
    car = models.CharField(max_length=50)
    client_description = models.TextField()
    staff_description = models.TextField()
    date_start = models.DateField(auto_now_add=True)
    date_end = models.DateField(blank=False)
    date_finished = models.DateField(blank=True, null=True)
