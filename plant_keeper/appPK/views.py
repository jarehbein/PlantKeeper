from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def galeria(request):
    return render(request, 'galeria.html')

def calendario(request):
    return render(request, 'calendario.html')

def biblioteca(request):
    return render(request, 'biblioteca.html')

def foro(request):
    return render(request, 'foro.html')

def contacto(request):
    return render(request, 'contacto.html')

def inisesion(request):
    return render(request, 'inisesion.html')

def registro(request):
    return render(request, 'registro.html')

def planta1(request):
    return render(request, 'planta1.html')

def planta2(request):
    return render(request, 'planta2.html')

def planta3(request):
    return render(request, 'planta3.html')


