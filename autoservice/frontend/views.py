from django.shortcuts import render
from django.views.generic.detail import DetailView
from clients.models import Clients
from goods.models import Goods
from django.contrib.auth import get_user_model

User = get_user_model()


def index(request):
    return render(request, 'frontend/index.html')


class ClientDetailView(DetailView):
    model = Clients
    template_name = 'frontend/index.html'


class GoodDetailView(DetailView):
    model = Goods
    template_name = 'frontend/index.html'


class CategoryDetailView(DetailView):
    model = Goods
    template_name = 'frontend/index.html'


class ClientDetailView(DetailView):
    model = Clients
    template_name = 'frontend/index.html'


class AccountDetailView(DetailView):
    model = User
    template_name = 'frontend/index.html'
