# main > urls.py

from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.main, name="main"),
    path('menu/', views.menu, name="menu"),
    path('menu/product/', include('products.urls', namespace='products')),
]