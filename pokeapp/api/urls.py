from django.urls import path
from .views import main,registerUser,MyTokenObtainPairView

urlpatterns = [
    path('',main),
    path('register/',registerUser, name="register"),
    path('login/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
]
