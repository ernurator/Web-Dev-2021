from django.http.response import JsonResponse
from .models import Product

def product_list(request):
    # SELECT * FROM core_products
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False) # if safe == True, data should be dict

def product_detail(request, product_id):
    # SELECT * FROM core_products WHERE id = <product_id>
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    
    return JsonResponse(product.to_json())
