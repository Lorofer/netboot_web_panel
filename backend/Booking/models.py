from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email_confirmed = models.BooleanField("Статус подтверждения почты", default=False)


class Stand(models.Model):
    status = models.BooleanField("Доступность стенда", default=True)
    ip = models.CharField("IP-адрес стенда", max_length=15)
    booking_time = models.TimeField("Время бронирования", null=True, blank=True)
