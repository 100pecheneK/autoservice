from rest_framework import routers

from .views import ExampleViewSet

router = routers.DefaultRouter()
router.register('', ExampleViewSet, '')

urlpatterns = router.urls
