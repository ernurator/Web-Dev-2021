from .views import category_list, category_detail
from django.urls import path

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail)
]
