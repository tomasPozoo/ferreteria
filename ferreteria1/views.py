from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def login(request):
    return render(request, 'login.html')

def crear(request):
    return render(request, 'crear.html')

def productos(request):
    return render(request, 'productos.html')

def productoSolo(request):
    return render(request, 'productoSolo.html')

def pago(request):
    return render(request, 'pago.html')

def quienesSomos(request):
    return render(request, 'quienesSomos.html')

def contactanos(request):
    return render(request, 'contactanos.html')

def shop(request):
    return render(request, 'shop.html')

def cambioContrasena(request):
    return render(request, 'cambioContrasena.html')
