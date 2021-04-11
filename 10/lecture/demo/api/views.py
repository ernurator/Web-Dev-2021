from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from core.models import Category
import json


@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        # categories = Category.objects.filter(name__contains='c').order_by('-id')
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            category = Category.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(category.to_json())


@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(category.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        category.name = data['name']
        category.save()
        return JsonResponse(category.to_json())
    elif request.method == 'DELETE':
        category.delete()
        # return HttpResponse(status=204)
        return JsonResponse({'message': 'Category deleted'}, status=200)
