from rest_framework.serializers import ModelSerializer
from clients.models import Clients


class ClientsSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields = '__all__'


class ClientsContactSerializers(ModelSerializer):
    class Meta:
        model = Clients
        fields = ('id', 'phone_number')
