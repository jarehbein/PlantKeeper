from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
from appPK import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('galeria', views.galeria, name='galeria'),
    path('calendario/', views.calendario, name='calendario'),
    path('foro/', views.foro, name='foro'),
    path('contacto/', views.contacto, name='contacto'),
    path('',include('appPK.urls')),

] 
