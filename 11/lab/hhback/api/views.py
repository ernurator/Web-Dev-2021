from .models import Company, Vacancy
from django.http.response import JsonResponse


## Companies


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancy_set.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


## Vacancies


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
