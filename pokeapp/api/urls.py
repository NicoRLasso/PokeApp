from django.urls import path
from .views import main,registerUser

urlpatterns = [
    path('',main),
    path('register/',registerUser, name="register"),
]
