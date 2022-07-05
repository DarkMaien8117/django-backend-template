from django.urls import re_path
from myapp import views

urlpatterns = [
    re_path(r'^account/login', views.login),
    re_path(r'^account/signup',views.signup),
]
