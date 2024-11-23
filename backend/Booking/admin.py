from django.contrib import admin
from .models import CustomUser, Stand


@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "email", "password", "email_confirmed", "is_staff"]


@admin.register(Stand)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ["id", "ip", "status", "booking_time"]
