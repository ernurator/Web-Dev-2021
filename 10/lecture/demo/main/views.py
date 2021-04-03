# from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

from datetime import timedelta, datetime

def hello(request):
    return HttpResponse('<h1>hello view function response</h1>')

def show_time(request, hours):
    current_time = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f'<h1>Time: {current_time}</h1>')


# def product_list(request):
#     return HttpResponse('<h1>Product list page</h1>')

# def product_detail(request, product_id):
#     return HttpResponse(f'<h1>Product detail page: {product_id}</h1>')

products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000
    }
    for i in range(1, 11)
]

def product_list(request):
    return JsonResponse(products, safe=False) # if safe == True, data should be dict

def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product with not found with selected ID'}, status=400) # should return something
