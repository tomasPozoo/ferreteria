from django.shortcuts import render
import requests
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

FIREBASE_API_KEY = 'AIzaSyA4QXFkzz7f3Yej76d_4kuwKcMtuyQdY_c'

def home(request):
    return render(request, 'home.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, "Sesión iniciada correctamente.")
            return redirect('/')  # O redirige a donde prefieras
        else:
            messages.error(request, "Credenciales incorrectas.")
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
