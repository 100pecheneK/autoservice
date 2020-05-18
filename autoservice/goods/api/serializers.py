from rest_framework.fields import SerializerMethodField
from rest_framework import serializers

from goods.models import Goods, Category
from rest_framework.serializers import (
    ModelSerializer
)


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

    def create(self, validated_data):
        category = Category.objects.create(
            title=validated_data['title'],
        )
        category.save()
        return category


class GoodsSerializer(ModelSerializer):
    # category = SerializerMethodField()

    class Meta:
        model = Goods
        fields = ('title', 'description', 'quantity', 'price', 'category')


    def create(self, validated_data):
        good = Goods.objects.create(
            title=validated_data['title'],
            description=validated_data['description'],
            quantity=validated_data['quantity'],
            price=validated_data['price'],
            category=validated_data['category'],
        )
        good.save()
        return good

    # def update(self, instance, validated_data):
    #     inst = super().update(instance, validated_data)
    #
    #     status = self.context['request'].data['status']
    #     if status == 'Админ':
    #         inst.is_superuser = True
    #     else:
    #         inst.is_superuser = False
    #
    #     inst.save()
    #     return inst




