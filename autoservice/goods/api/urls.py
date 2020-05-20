from django.urls import path
from rest_framework import routers

from goods.api.views import CategoryAPIViewSet, GoodsAPIViewSet, GoodsAPISearchView

urlpatterns = [
    path('search/', GoodsAPISearchView.as_view(), name='search')
]

router = routers.DefaultRouter()
router.register('category', CategoryAPIViewSet, 'category')
router.register('', GoodsAPIViewSet, 'goods')


urlpatterns += router.urls


