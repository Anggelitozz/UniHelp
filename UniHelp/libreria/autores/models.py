from django.db import models

#Modelo para la entidad Autor. 
class Autor(models.Model):
    materia = models.CharField(max_length=30)
    tema = models.CharField(max_length=30)
    profesor = models.CharField(max_length=30)
    documento = models.FileField()