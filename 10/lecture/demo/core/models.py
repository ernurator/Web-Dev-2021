from django.db import models

'''
# create table core_product (
#     id INTEGER,
#     name VARCHAR(300),
#     price NUMBER DEFAULT 0
# );
'''

# 1) OneToOne relation - (for each User, only 1 Profile)
# 2) OneToMany relation - (each Category will have several number of Product)
# 3) ManyToMany relation - (Product and Tag)

# class Tag(models.Model):
#     name = models.CharField(max_length=100)

# class ProductTag(models.Model):
#     tag = models.ForeignKey(Tag)
#     product = models.ForeignKey(Product)


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        # db_table = 'core_category'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f'{self.id}: {self.name}'


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True,
                                 related_name='products')  # by default related_name='class_name_set'
    # models.SET_NULL, null=True
    # models.SET_DEFAULT, default=...

    # tags = models.ManyToManyField(Tag) - will implicitly create smthng like ProductTag

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'
