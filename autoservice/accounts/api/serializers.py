from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.serializers import (
    ModelSerializer,
    Serializer,
    CharField,
    ValidationError
)

User = get_user_model()
User._meta.get_field('email')._unique = True


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class LoginSerializer(Serializer):
    username = CharField()
    password = CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise ValidationError("Некорректные данные")
# class RegisterSerializer(ModelSerializer):
#     class Meta:
#         model = User
#  # Здесь добавить поля имени, фамили и т.д.
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}
#
#     def create(self, validated_data):
#         user = User.objects.create_user(
#             validated_data['username'],
#             validated_data['email'],
#             validated_data['password']
#         )
#         return user
