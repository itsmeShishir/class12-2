from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .models import CustomUser
# Create your views here.
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Login successful")
            if user.role == "admin":
                return redirect("admin_page")
            return redirect("home")
        else:
            messages.error(request, "Invalid email or password")
            return redirect("login")
    return render(request, "login.html")

def register_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        password_confirm = request.POST.get("password_confirm")
        phone_number = request.POST.get("phone_number")
        profile_pic = request.POST.get("profile_pic")
        if password != password_confirm:
            messages.error("Password does not match")
            return redirect("register")
        CustomUser.objects.create_user(email=email, password=password, phone_number=phone_number, profile_pic=profile_pic)
        messages.success("Account created successfully")
        return redirect("login")
    return render(request, "register.html")

def changePassword_view(request):
    if request.method =="POST":
        old_password = request.POST.get("old_password")
        new_password = request.POST.get("new_password")
        confirm_password = request.POST.get("confirm_password")
        if new_password != confirm_password:
            messages.error("Password does not match")
            return redirect("changePassword")
        user = authenticate(request, email = request.user.email, password = old_password)
        if user is not None:
            user.set_password(new_password)
            messages.success("Password changed successfully")
            user.save()
            return redirect("home")
        else:
            messages.error("Invalid old password")
            return redirect("changePassword")
    return render(request, "changePassword.html")

def updateprofile_view(request):
    if request.method =="POST":
        email = request.POST.get("email")
        phone_number = request.POST.get("phone_number")
        profile_pic = request.POST.get("profile_pic")

        user = request.user
        user.email = email
        user.phone_number = phone_number
        user.profile_pic = profile_pic
        user.save()
        messages.success("Profile updated successfully")
        return redirect("home")
    return render(request, "updateprofile.html")

def logout_view(request):
    logout(request)
    messages.success(request, "Logout successful")
    return redirect("login")