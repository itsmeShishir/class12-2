from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView

# Create your views here.
# 2 ota -> FBV, CBV
# function base views 
def index(request):
    return HttpResponse("Hello, world. You're at the blog index.")

def about(request):
    return HttpResponse("Hello, world. You're at the blog about.")

def blog(request):
    return HttpResponse("Hello, world. You're at the blog.")

def singleBlog(request):
    return HttpResponse("Hello, world. You're at the blog singleBlog.")

def contact(request):
    return HttpResponse("Hello, world. You're at the blog contact.")

def getSingleCategory(request):
    return HttpResponse("Hello, world. You're at the blog getSingleCategory.")