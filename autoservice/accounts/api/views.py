from rest_framework.generics import (
    GenericAPIView,
    RetrieveAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from knox.models import AuthToken
from django.contrib.auth import get_user_model

from .serializers import (
    UserSerializer,
    LoginSerializer,
    AccountAPISerializer,
)
from .permissions import IsSuperUser

User = get_user_model()


class UserAPIView(RetrieveAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class AccountsAPIViewSet(ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated, IsSuperUser]
    serializer_class = AccountAPISerializer


class LoginAPIView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
