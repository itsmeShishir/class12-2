from django.contrib import admin
from .models import *
# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email','role', 'phone_number', 'profile_pic']
    search_fields = ['username', 'email']
    list_filter = ['role']
    list_editable = ['role']