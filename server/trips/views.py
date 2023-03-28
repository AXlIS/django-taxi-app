from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializers, LogInSerializer


class SingUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializers


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer
