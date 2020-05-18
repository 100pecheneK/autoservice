from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from clients.models import Clients
from .serializers import ClientsSerializer


class ClientsAPIViewSet(ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer
    permission_classes = [IsAuthenticated, ]
