from operator import truediv
from django.db import models


# Create your models here.
class Pokemonapp(models.Model):
    idPokemon = models.IntegerField(default=0,unique=True)
    nombre = models.CharField(max_length=255)
    hp = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    specialAttack = models.IntegerField(default=0)
    specialDefense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    peso = models.CharField(max_length=10)
    altura = models.CharField(max_length=10)
    tipo = models.CharField(max_length=255)
    imagensprite = models.TextField(null=True,blank=True,default='0')