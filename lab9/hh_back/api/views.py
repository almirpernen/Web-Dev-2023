from django.http import JsonResponse
from . import models


def get_companies(request):
    companies = models.Company.objects.all()
    companies_json = [comp.to_json() for comp in companies]
    return JsonResponse(companies_json, safe=False)

def get_company(request, company_id):
    try:
        company = models.Company.objects.get(id=company_id)
        return JsonResponse(company.to_json(), status=200)
    except models.Company.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)


def get_company_vacancies(request, company_id):
    company_name = models.Company.objects.get(id=company_id)
    vacancies = models.Vacancy.objects.filter(company=company_name)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancies(request):
    vacancies = models.Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def get_vacancy(request, vacancy_id):
    try:
        vacancy = models.Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json(), status=200)
    except models.Vacancy.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)


def get_vacancies_top(request):
    vacancies = models.Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)