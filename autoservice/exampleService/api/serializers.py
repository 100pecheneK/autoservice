from rest_framework import serializers

from exampleService.models import ExampleService


class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleService
        fields = '__all__'
