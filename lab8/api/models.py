from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    class Meta:
        verbose_name='Category'
        verbose_name_plural = 'Categories'


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.CharField(max_length=255)

    def __str__(self):
        return f"ID:{self.id}, Name: {self.name}, Price: {self.price}, Description: {self.description}, Count: {self.count}, Is Active: {self.is_active}, Category: {self.category}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category
        }

    class Meta:
        verbose_name='Product'
        verbose_name_plural = 'Products'