from .serializers import UserSerializer,PokeSerializer
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Pokemonapp
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data =super().validate(attrs)
        serializer = UserSerializer(self.user).data
        for k,v in serializer.items():
            data[k]=v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Create your views here.


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['username'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializer(user,many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'User with this Username already exist'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def addpokemon(request):
    data = request.data
    try:
        Pokemonapp.objects.create(
            idPokemon=data['idpokemon'],
            nombre=data['nombre'],
            hp=data['hp'],
            attack=data['attack'],
            defense=data['defense'],
            specialAttack=data['specialAttack'],
            specialDefense=data['specialDefense'],
            speed=data['speed'],
            peso=data['peso'],
            altura=data['altura'],
            tipo=data['tipo'],
            imagensprite=data['imagensprite']
        )
        message = {'detail':'Pokemon agregdo'}
        return Response(message,status=status.HTTP_200_OK)
    except Exception as error:
        message = {'detail':'Este pokemon ya lo agregaste'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['get'])
def getPokemon(request):
    pokemons = Pokemonapp.objects.all()
    serializer = PokeSerializer(pokemons,many=True)
    return Response(serializer.data)