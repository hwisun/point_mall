from django.urls import path

from user import views

urlpatterns = [
    path('', views.MymeView.as_view()),
    path('items/', views.MyitemsView.as_view()),
]