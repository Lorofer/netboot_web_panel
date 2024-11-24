from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email_confirmed = models.BooleanField("Статус подтверждения почты", default=False)

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    def __str__(self):
        return f"User({self.username}: {self.email})"


class Stand(models.Model):
    code = models.CharField("Код стенда", max_length=4, null=True)
    status = models.BooleanField("Доступность стенда", default=True)
    ip = models.CharField("IP-адрес стенда", max_length=15)
    booking_time = models.TimeField("Время бронирования", null=True, blank=True)

    class Meta:
        verbose_name = "Стенд"
        verbose_name_plural = "Стенды"
