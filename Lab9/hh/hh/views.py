from rest_framework.decorators import api_view
from rest_framework.response import Response
from hh.models import Company,Vacancy
import random,string
from .serializers import CompanySerializer, VacancySerializer
@api_view()
def Init(request):
    Company.objects.all().delete()
    Vacancy.objects.all().delete()
    
    for i in range(50):
        n,d,c,a = '','','',''
        for j in range(20):
            n += random.choice(string.ascii_lowercase)
            d += random.choice(string.ascii_lowercase)
            c += random.choice(string.ascii_lowercase)
            a += random.choice(string.ascii_lowercase)
        Company.objects.create(name = n,description = d,city = c,address = a)
    tmp = Company.objects.all()
    for j in range(500):
        n,d = '',''
        for j in range(20):
            n += random.choice(string.ascii_lowercase)
            d += random.choice(string.ascii_lowercase)
        Vacancy.objects.create(name = n,description = d,salary = random.uniform(50000,1000000),company = tmp[random.randint(0,49)])
    return Response({"Initialized"})

@api_view()
def GetCompanies(request):
    return Response(CompanySerializer(Company.objects.all(),many = True).data)

@api_view()
def GetCompanyById(request,id):
    return Response(CompanySerializer(Company.objects.all()[id]).data)

@api_view()
def GetVacanciesOfCompany(request,id):
    return Response(VacancySerializer(Vacancy.objects.filter(company = Company.objects.all()[id]),many = True).data)

@api_view()
def GetVacancies(request):
    return Response(VacancySerializer(Vacancy.objects.all(),many = True).data)

@api_view()
def GetVacancyById(request,id):
    return Response(VacancySerializer(Vacancy.objects.all()[id]).data)

@api_view()
def GetTopTen(request):
    return Response(VacancySerializer(Vacancy.objects.all().order_by('-salary')[0:10],many = True).data)
