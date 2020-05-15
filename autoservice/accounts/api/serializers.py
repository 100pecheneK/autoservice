from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    ModelSerializer,
    Serializer,
    CharField,
    ValidationError,
    SerializerMethodField,
)

User = get_user_model()
User._meta.get_field('email')._unique = True


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_superuser')


class AccountAPISerializer(ModelSerializer):
    status = SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'generic_name', 'username', 'email', 'phone_number', 'password', 'status')
        extra_kwargs = {'password': {'write_only': True}}

    def get_status(self, obj):
        if obj.is_superuser:
            return 'Админ'
        else:
            return 'Сотрудник'

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            generic_name=validated_data['generic_name'],
            phone_number=validated_data['phone_number']
        )

        status = self.context['request'].data['status']
        if status == 'Админ':
            user.is_superuser = True

        user.save()
        return user

    def update(self, instance, validated_data):
        inst = super().update(instance, validated_data)

        status = self.context['request'].data['status']
        if status == 'Админ':
            inst.is_superuser = True
        else:
            inst.is_superuser = False

        inst.save()
        return inst


class LoginSerializer(Serializer):
    username = CharField()
    password = CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise ValidationError("Некорректные данные")
