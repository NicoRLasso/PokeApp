from django.db.models import fields
from rest_framework import serializers
from .models import Pokemonapp
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields=['username','email','isAdmin','token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


    def get_isAdmin(self , obj):
        return obj.is_staff

class PokeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemonapp
        fields="__all__"
