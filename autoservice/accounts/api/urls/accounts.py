from rest_framework import routers

from accounts.api.views import AccountsAPIViewSet

router = routers.DefaultRouter()
router.register('', AccountsAPIViewSet, 'accounts')

urlpatterns = router.urls

