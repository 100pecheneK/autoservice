from django.urls import path

from .views import index, ClientDetailView, AccountDetailView, OrderDetailView

urlpatterns = [
    path('', index),
    path('login', index),
    path('accounts/', index),
    path('accounts/<int:pk>', AccountDetailView.as_view()),
    path('accounts/create', index),
    path('clients/', index),
    path('clients/create', index),
    path('clients/<int:pk>', ClientDetailView.as_view()),
    path('goods/', index),
    path('orders/', index),
    path('orders/create', index),
    path('orders/<int:pk>', OrderDetailView.as_view()),
]
