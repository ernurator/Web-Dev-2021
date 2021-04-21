from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from core.models import Category, Product
from api.serializers import CategorySerializer2, ProductSerializer


class CategoryListAPIView(generics.ListCreateAPIView):
    # override def get_queryset()
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    # permission_classes = (IsAuthenticated,)  # is included in settings


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    # lookup_field = 'category_id'


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
