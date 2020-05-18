from rest_framework.serializers import (
    ModelSerializer,
    PrimaryKeyRelatedField,
    SerializerMethodField
)
from orders.models import Orders
from clients.models import Clients
from .fields import (
    get_client_id,
    get_first_name,
    get_generic_name,
    get_last_name,
    get_phone_number,
    get_status,
)


class ClientSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields = ('id', 'phone_number')


class ClientPhoneSerializer(ModelSerializer):
    class Meta:
        model = Clients
        fields = ('phone_number',)


class OrdersSerializer(ModelSerializer):
    client = ClientSerializer(read_only=True)
    client_id = PrimaryKeyRelatedField(
        queryset=Clients.objects.all(), source='client', write_only=True
    )

    class Meta:
        model = Orders
        fields = '__all__'


class OrderDetailSerializer(ModelSerializer):
    client_id = SerializerMethodField()
    first_name = SerializerMethodField()
    generic_name = SerializerMethodField()
    last_name = SerializerMethodField()
    phone_number = SerializerMethodField()

    class Meta:
        model = Orders
        fields = (
            "car",
            "client_description",
            "client_id",
            "date_end",
            "first_name",
            "generic_name",
            "last_name",
            "phone_number",
            "staff_description",
        )

    def get_client_id(self, obj):
        return get_client_id(self, obj)

    def get_first_name(self, obj):
        return get_first_name(self, obj)

    def get_generic_name(self, obj):
        return get_generic_name(self, obj)

    def get_last_name(self, obj):
        return get_last_name(self, obj)

    def get_phone_number(self, obj):
        return get_phone_number(self, obj)


class OrdersListSerializer(ModelSerializer):
    phone_number = SerializerMethodField()
    status = SerializerMethodField()

    class Meta:
        model = Orders
        fields = ('id', 'phone_number', 'car', 'date_end', 'status')

    def get_phone_number(self, obj):
        return get_phone_number(self, obj)

    def get_status(self, obj):
        return get_status(self, obj)
