from django.urls import path
from rest_framework import routers

from goods.api.views import CategoryAPIViewSet, GoodsAPIViewSet


router = routers.DefaultRouter()
router.register('category', CategoryAPIViewSet, 'category')
router.register('', GoodsAPIViewSet, 'goods')

urlpatterns = router.urls


