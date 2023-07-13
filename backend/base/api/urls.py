from django.urls import path
from . import views
from rest_framework_simplejwt.views import (TokenRefreshView,)
from . views import  MyTokenObtainPairView, RegisterView, classUserList, Notes, userDetails

urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register', RegisterView.as_view()),
    path('user-list/', views.userList, name='user-list'),
    path('user-update-form/<int:pk>/', views.userUpdate, name='user-update-form'),
    path('user-delete/<int:pk>/', views.userDelete, name='user-delete'),

    path('class-userlist/', classUserList.as_view(), name='class-userlist'),
    path('notes/', Notes.as_view(), name='notes'),
     path('class-userlist/<int:pk>/', userDetails.as_view(), name='userDetails'),

]