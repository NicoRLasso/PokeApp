from django.urls import path
from .views import registerUser,addpokemon,getPokemon,MyTokenObtainPairView

urlpatterns = [
    path('register/',registerUser, name="register"),
    path('login/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('addpokemon/',addpokemon, name="addpoke"),
    path('getPoke/',getPokemon, name="getpoke"),
]
