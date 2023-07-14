from django.urls import path
from . import views

urlpatterns = [
    path('index.html', views.home, name='index'),
    path('galeria.html', views.galeria, name='galeria'),
    path('calendario.html', views.calendario, name='calendario'),
    path('biblioteca.html', views.biblioteca, name='biblioteca'),
    path('foro.html', views.foro, name='foro'),
    path('contacto.html', views.contacto, name='contacto'),
    path('inisesion.html', views.inisesion, name='inisesion'),
    path('registro.html', views.registro, name='registro'),
    path('planta1.html', views.planta1, name='planta1'),
    path('planta2.html', views.planta2, name='planta2'),
    path('planta3.html', views.planta3, name='planta3'),
]