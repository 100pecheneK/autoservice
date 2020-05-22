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

    class Meta:
        model = Goods
        fields = ('id', 'title', 'description', 'quantity', 'price', 'category')

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


class GoodsListSerializer(ModelSerializer):
    category = SerializerMethodField()

    class Meta:
        model = Goods
        fields = ('id', 'title', 'description', 'quantity', 'price', 'category')

    def get_category(self, obj):
        return obj.category.title


