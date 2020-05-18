from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from goods.models import Goods, Category

from .serializers import (
    GoodsSerializer,
    CategorySerializer
)


class CategoryAPIViewSet(ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = CategorySerializer


class GoodsAPIViewSet(ModelViewSet):
    queryset = Goods.objects.all()
    permission_classes = []
    serializer_class = GoodsSerializer


