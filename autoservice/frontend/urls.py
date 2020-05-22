from django.urls import path

from .views import index, ClientDetailView, AccountDetailView, GoodDetailView, CategoryDetailView, OrdersDetailView

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
    path('goods/create', index),
    path('goods/<int:pk>', GoodDetailView.as_view()),
    path('goods/category/', index),
    path('goods/category/create', index),
    path('goods/category/<int:pk>', CategoryDetailView.as_view()),
    path('orders/', index),
    path('orders/create', index),
    path('orders/<int:pk>', OrdersDetailView.as_view()),
]
