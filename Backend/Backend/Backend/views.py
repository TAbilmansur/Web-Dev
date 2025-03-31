from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from Backend.models import Product, Category
from .serializers import CategorySerializer,ProductSerializer

@api_view()
def Init(request):

    Category.objects.all().delete()
    Product.objects.all().delete()

    Category.objects.create(name = 'chairs')
    Category.objects.create(name = 'mice')
    Category.objects.create(name = 'wardrobes')
    Category.objects.create(name = 'YandexStations')

    Product.objects.create(name = 'Стул C06',price = 4999,description = 'Пластиковый, обшивка: отсутствует, жесткая жесткость сиденья, высокая жесткость спинки, максимальная нагрузка 100кг, высота 80см, ширина 46см, глубина 40см',category = 'chairs')
    Product.objects.create(name = 'Стул Чили',price = 10000,description = 'Металлический, обшивка: велюр, средняя жесткость сиденья, средняя жесткость спинки, максимальная нагрузка 120кг, высота 86см, ширина 45см, глубина 37см',category = 'chairs')
    Product.objects.create(name = 'Табурет Nika Эконом',price = 2973,description = 'Металлический, обшивка: экокожа (искусственная кожа), средняя жесткость сиденья, максимальная нагрузка 130кг, высота 46.5см, ширина 32см, глубина 32см',category = 'chairs')

    Product.objects.create(name = 'Мышь Wireless Mouse черный',price = 840,description = 'Оптическая светодиодная, беспроводная',category = 'mice')
    Product.objects.create(name = 'Мышь Logitech G102 Lightsync черный',price = 8876,description = 'Оптическая светодиодная, проводная',category = 'mice')
    Product.objects.create(name = 'Мышь X-Game XM-775OGB черный',price = 1175,description = 'Оптическая светодиодная, беспроводная',category = 'mice')
 
    Product.objects.create(name = 'Распашной шкаф IMPERIAL Алёна',price = 47312,description = 'Распашной, 5 полок',category = 'wardrobes')
    Product.objects.create(name = 'Распашной шкаф c зеркалом Aisha Pro',price = 55591,description = 'Распашной, 4 полок',category = 'wardrobes')
    Product.objects.create(name = 'Распашной шкаф Aliico.kz Н102',price = 44595,description = 'Распашной, 4 полок',category = 'wardrobes')
    
    Product.objects.create(name = 'Умная колонка Яндекс Станция Лайт 2',price = 29749,description = '90х90х65 мм',category = 'YandexStations')
    Product.objects.create(name = 'Умная колонка Яндекс Станция Миди',price = 73770,description = '110x96x96 мм',category = 'YandexStations')
    Product.objects.create(name = 'Умная колонка Яндекс Станция Мини',price = 40533,description = '97x54x97 мм',category = 'YandexStations')
 
    return Response({'Success':'true'})

@api_view()
def GetProducts(request):
    return Response(ProductSerializer(Product.objects.all(),many = True).data)

@api_view()
def GetProductsByCategory(request,id):
    return Response(ProductSerializer(Product.objects.filter(category = Category.objects.all()[id].name),many = True).data)

@api_view()
def GetProductById(request,id):
    product = Product.objects.all()[id]
    return Response({
        'name':product.name,
        'price':product.price,
        'description':product.description,
        'count':product.count,
        'is_active':product.is_active
    })


@api_view()
def GetCategories(request):
    return Response(CategorySerializer(Category.objects.all(),many = True).data)

@api_view()
def GetCategoryById(request,id):
    return Response({'name':Category.objects.all()[id].name})