from django.urls import path
from . import views

urlpatterns = [
    path('hi/', views.hello),
    path('categories/', views.get_categories),
    path('categories/<int:pk>/', views.get_category),
    path('products/', views.get_products),
    path('products/<int:pk>/', views.get_product),
    path('categories/<int:pk>/products/', views.get_category_products),
]