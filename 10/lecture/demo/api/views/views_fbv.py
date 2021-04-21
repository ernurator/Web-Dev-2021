from rest_framework.decorators import api_view
from rest_framework.response import Response

from core.models import Category
from api.serializers import CategorySerializer2


# csrf_exempt is implemented inside api_view
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer2(instance=categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer2(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer2(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        # return HttpResponse(status=204)
        return Response({'message': 'Category deleted'}, status=200)
