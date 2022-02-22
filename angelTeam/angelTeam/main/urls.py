# main > urls.py

from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.main, name="main"),
    path('menu/', views.menu, name="menu"),
    path('menu/product/', include('products.urls', namespace='products')),
    path('store/', views.store, name="store"),
    path('cs/', views.cs, name="cs"),
    path('event/', views.event, name="event"),
    path('event/view', views.eventView, name="eventView"),
]