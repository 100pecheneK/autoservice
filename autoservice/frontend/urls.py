from django.urls import path

from .views import index, ClientDetailView

urlpatterns = [
    path('', index),
    path('login', index),
    path('accounts/', index),
    path('clients/', index),
    path('clients/create', index),
    path('clients/<int:pk>', ClientDetailView.as_view()),
    path('goods/', index),
    path('orders/', index),
]
