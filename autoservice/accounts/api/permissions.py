from rest_framework.permissions import IsAdminUser


class IsSuperUser(IsAdminUser):

    def has_object_permission(self, request, view, obj):
        return bool(request.user and request.user.is_superuser)


