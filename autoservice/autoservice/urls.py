from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/example/', include('exampleService.api.urls')),
    path('admin/', admin.site.urls),
]
