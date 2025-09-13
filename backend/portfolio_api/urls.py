from django.contrib import admin
from django.urls import path, include   # 👈 include added

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api_app.urls')),  # 👈 new line to connect api_app
]
