from rest_framework import viewsets

from .serializers import ExampleSerializer
from exampleService.models import ExampleService


class ExampleViewSet(viewsets.ModelViewSet):
    queryset = ExampleService.objects.all()
    serializer_class = ExampleSerializer
