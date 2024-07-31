from django.urls import path

from calculator import views

urlpatterns = [
    path('', views.show_calculator, name='calculator'),
]
