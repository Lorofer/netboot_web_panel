from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import *
from .models import Stand
from .serializers import StandSerializer


class MainView(ModelViewSet):
    queryset = Stand.objects.raw('''SELECT id, code, status FROM "Booking_stand";''')
    serializer_class = StandSerializer
    authentication_classes = (TokenAuthentication,)