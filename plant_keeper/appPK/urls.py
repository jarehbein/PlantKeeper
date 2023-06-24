from django.urls import path
from . import views

urlpatterns = [
    # Otras rutas de la aplicación...
    path('galeria.html', views.galeria_page, name='galeria_page'),
]