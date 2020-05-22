from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Goods(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    quantity = models.IntegerField()
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='goods')
