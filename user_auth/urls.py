from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('accounts/profile/', views.profile, name='profile'),
    path('accounts/register', views.register, name='register'),
]
