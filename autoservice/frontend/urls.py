from django.urls import path

from .views import index

urlpatterns = [
    path('', index),
    path('home/', index),
    path('accounts/', index),
    path('clients/', index),
    path('clients/create', index),
    path('goods/', index),
    path('orders/', index),
]
