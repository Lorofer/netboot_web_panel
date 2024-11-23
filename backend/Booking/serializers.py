from rest_framework import serializers
from .models import CustomUser, Stand


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id' 'username', 'email', 'password', 'email_confirmed', 'is_staff']
        extra_kwargs = {'password': {'write_only': True}}


class StandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stand
        fields = ["id", "status"]
