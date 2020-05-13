from rest_framework import routers
from django.urls import path

from .views import OrdersAPIViewSet

router = routers.DefaultRouter()
router.register('', OrdersAPIViewSet, 'orders')
urlpatterns = router.urls
