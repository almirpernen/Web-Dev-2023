from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', CompanyAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', Company_vacancies.as_view()),
    path('vacancies/', VacanciesAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', Top_ten_vacancies.as_view()),
]