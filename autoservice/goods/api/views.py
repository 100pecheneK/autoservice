from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from goods.models import Goods, Category

from .serializers import (
    GoodsSerializer,
    CategorySerializer,
    GoodsListSerializer
)


class CategoryAPIViewSet(ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = CategorySerializer


#кастомные поля поиска
# class CustomSearchFilter(SearchFilter):
#     def get_search_fields(self, view, request):
#         if request.query_params.get('title_only'):
#             return ['title']
#         return super(CustomSearchFilter, self).get_search_fields(view, request)


class GoodsAPIViewSet(ModelViewSet):
    queryset = Goods.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = GoodsSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            query = self.request.GET.get('category')
            if query:
                return Goods.objects.filter(category=query)
            return Goods.objects.all()
        return Goods.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = GoodsListSerializer(queryset, many=True)
        return Response(serializer.data)


class GoodsAPISearchView(ListAPIView):
    queryset = Goods.objects.all()
    search_fields = ['title', 'id']
    filter_backends = [SearchFilter]
    serializer_class = GoodsSerializer











