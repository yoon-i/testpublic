from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.

app_name = 'main'

def main(request):
    return render(request, 'main/main.html')

def cs(request):
    return render(request, 'main/CS.html')

def store(request):
    return render(request, 'main/store.html')