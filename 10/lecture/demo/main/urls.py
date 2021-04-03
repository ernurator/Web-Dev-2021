from .views import hello, product_list, show_time, product_detail
from django.urls import path, re_path

urlpatterns = [
    path('hi/', hello),
    re_path(r'time/plus/(\d+)/', show_time),
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail)
]
