from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from orders.models import Orders
from clients.models import Clients


class ClientSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields = ('id', 'phone_number')


class OrdersSerializer(ModelSerializer):
    client = ClientSerializer(read_only=True)
    client_id = PrimaryKeyRelatedField(
        queryset=Clients.objects.all(), source='client', write_only=True
    )

    class Meta:
        model = Orders
        fields = '__all__'
