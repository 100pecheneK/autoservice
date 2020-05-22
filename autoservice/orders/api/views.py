from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from orders.models import Orders
from .serializers import OrdersSerializer, OrdersListSerializer, OrderDetailSerializer
from copy import deepcopy
from clients.api.serializers import ClientsSerializer


class OrdersAPIViewSet(ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    permission_classes = [IsAuthenticated, ]

    def create(self, request, *args, **kwargs):
        if not request.data['client_id']:
            data = deepcopy(request.data)
            serializer = ClientsSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            client = serializer.save()
            data['client_id'] = client.id
        else:
            data = request.data

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            OrdersListSerializer(serializer.instance).data,
            status=status.HTTP_201_CREATED,
            headers=headers)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = OrderDetailSerializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        queryset = Orders.objects.all()
        serializer = OrdersListSerializer(queryset, many=True)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(OrdersListSerializer(serializer.instance).data)
