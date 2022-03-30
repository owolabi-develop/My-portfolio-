from django.urls import path,include
from . import views

app_name="PortFolio"

urlpatterns = [
    path('',views.index,name="index")
]
