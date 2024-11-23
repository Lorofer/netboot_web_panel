from django.urls import path, include, re_path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"stands", MainView)

urlpatterns = [
                path('api/', include(router.urls)),
                path('api/auth/', include('djoser.urls')),
                re_path(r'^auth/', include('djoser.urls.authtoken'))
               ]

