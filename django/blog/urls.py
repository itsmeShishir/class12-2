from django.urls import path
from .views import *
urlpatterns = [
    path("", index, name="index"),
    path('about', about, name="about"),
    path('contact', contact, name="contact"),
    path('blog', blog, name="blog"),
    path('blogsingle', singleBlog, name="blogsingle"),
    path('single-category',  getSingleCategory, name="SingleCategory"),
]