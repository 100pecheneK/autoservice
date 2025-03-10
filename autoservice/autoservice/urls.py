from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/auth/', include('accounts.api.urls')),
    path('api/goods/', include('goods.api.urls')),
    path('api/clients/', include('clients.api.urls')),
    path('api/orders/', include('orders.api.urls')),
    path('api/accounts/', include('accounts.api.urls')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
