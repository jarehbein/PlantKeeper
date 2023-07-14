from django.urls import path
from administrador import views

urlpatterns = [
    path('panel_administracion/',views.panel,name="panel_administracion"),
    path('administrador/', views.i_admin, name='administrador'),
    path('encontrarUsuario/<int:pk>/', views.encontrarUsuario, name='encontrarUsuario'),
    path('encontrarUsuario/', views.encontrarUsuario, name='encontrarUsuario'),
    path('modificarUsuario/', views.editar_user, name='modificarUsuario'),
    path('eliminarUsuario/<str:pk>',views.eliminar_user,name='eliminarUsuario'),
    path('agregarUsuario/', views.nuevo_user, name='agregarUsuario')
]