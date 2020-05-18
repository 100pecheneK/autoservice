from rest_framework import routers
from django.urls import path

from .views import ClientsAPIViewSet, ClientsContactAPIViewList

urlpatterns = [
    path('contact/', ClientsContactAPIViewList.as_view(), name='contact')
]
router = routers.DefaultRouter()
router.register('', ClientsAPIViewSet, 'client')
urlpatterns += router.urls
