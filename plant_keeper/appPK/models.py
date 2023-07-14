from django.db import models

class Model1(models.Model):
    id_usuario  = models.AutoField(db_column='idUsuario', primary_key=True) 
    usuario    = models.CharField(max_length=30)
    contraseña  = models.CharField(max_length=30)
