from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet, contact_view

router = DefaultRouter()
router.register('projects', ProjectViewSet, basename='projects')
router.register('skills', SkillViewSet, basename='skills')

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', contact_view),
]
