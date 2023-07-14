from pyexpat.errors import messages
from django.shortcuts import redirect, render
from appPK.models import Model1

# Create your views here.


def panel(request):
    return render(request,'panel_admin.html')

def i_admin(request):
    usuarios = Model1.objects.all()
    context={'usuarios':usuarios}
    return render(request, 'i_admin.html', context)


def nuevo_user(request):
        if request.method != "POST":
            usu=Model1.objects.all()
            context={'usu':usu}
            return render(request,'nuevo_user.html',context)
        else:

            nombre=request.POST["usuario"]
            contra=request.POST["contra"]

            
            obj=Model1.objects.create(
                                    usuario=nombre,
                                    contraseña=contra)
            obj.save()
            context={'mensaje':'OK, datos guardados con éxito'}
            return render(request,'nuevo_user.html',context)


def encontrarUsuario(request, pk):
    usuario = Model1.objects.get(id_usuario=pk)
    if usuario:
        context = {'usuario': usuario}
        return render(request, 'editar_user.html', context)
    else:
        context = {'mensaje': 'Error, id usuario no existe'}
        return render(request, 'i_admin.html', context)

def editar_user(request):
    if request.method == 'POST':
        idUsuario = request.POST["idUsuario"]
        n_usuario = request.POST["nombreUsuario"]
        contra = request.POST["contraseña"]

        usuario = Model1.objects.get(id_usuario=idUsuario)
        usuario.usuario = n_usuario
        usuario.contraseña = contra
        usuario.save()

        return redirect('i_admin.html')
    else:
        usuarios = Model1.objects.all()
        context = {'usuarios': usuarios}
        return render(request, 'i_admin.html', context)



def eliminar_user(request,pk):
    context={}
    try:
        usuario=Model1.objects.get(id_usuario=pk)
        usuario.delete()
        usuario="Ok, Datos eliminados satisfactoriamente"
        usuarios=Model1.objects.all()
        context={'usuarios':usuarios,'mensaje':mensaje}
        return render(request,'i_admin.html',context)
    except:
        mensaje="Error, id usuario no existe"
        usuarios=Model1.objects.all()
        context={'usuarios':usuarios,'mensaje':mensaje}
        return render(request,'i_admin.html',context)


