from .views import *
from django.urls import path

urlpatters = [
    path('login', login_view, name='login'),
    path('logout', logout_view, name='logout'),
    path('signup', register_view, name='register'),
    path('logout', logout_view, name='logout'),
]