from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
