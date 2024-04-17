from django.urls import path

from .views import get_companies, get_company, get_vacancies, get_vacancy, get_company_vacancies, get_vacancies_top

urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:company_id>/', get_company),
    path('companies/<int:company_id>/vacancies/', get_company_vacancies),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:vacancy_id>/', get_vacancy),
    path('vacancies/top_ten/', get_vacancies_top)
]
