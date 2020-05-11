from django.urls import path, include


urlpatterns = [
    path('', include('accounts.api.urls.accounts')),
    path('auth/', include('accounts.api.urls.auth')),
]








