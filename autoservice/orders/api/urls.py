from rest_framework import routers
from .views import OrdersAPIViewSet

router = routers.DefaultRouter()
router.register('', OrdersAPIViewSet, 'orders')
urlpatterns = router.urls
