from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
from appPK import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('appPK.urls')),
] 
