from django.shortcuts import render
from django.views.generic.detail import DetailView
from clients.models import Clients


def index(request):
    return render(request, 'frontend/index.html')


class ClientDetailView(DetailView):
    model = Clients
    template_name = 'frontend/index.html'
