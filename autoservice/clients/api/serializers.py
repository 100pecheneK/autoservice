from rest_framework.serializers import ModelSerializer
from clients.models import Clients


class ClientsSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields = '__all__'
