from django.urls import path,include
from . import views

app_name="PortFolio"

urlpatterns = [
    path('index/',views.index,name="index")
]
