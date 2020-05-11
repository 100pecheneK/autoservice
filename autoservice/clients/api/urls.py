from rest_framework import routers
from django.urls import path

from .views import ClientsAPIViewSet

router = routers.DefaultRouter()
router.register('', ClientsAPIViewSet, 'client')
urlpatterns = router.urls
