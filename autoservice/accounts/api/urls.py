from django.urls import path, include
from knox.views import LogoutView
from accounts.api.views import UserAPIView, LoginAPIView
from rest_framework import routers
from accounts.api.views import AccountsAPIViewSet

urlpatterns = [
    path('auth/', include('knox.urls')),
    path('auth/user', UserAPIView.as_view()),
    path('auth/login', LoginAPIView.as_view()),
    path('auth/logout', LogoutView.as_view(), name='knox_logout')
]
router = routers.DefaultRouter()
router.register('', AccountsAPIViewSet, 'accounts')

urlpatterns += router.urls
