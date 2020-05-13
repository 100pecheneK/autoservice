from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from orders.models import Orders
from .serializers import OrdersSerializer


class OrdersAPIViewSet(ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    permission_classes = [IsAuthenticated, ]
