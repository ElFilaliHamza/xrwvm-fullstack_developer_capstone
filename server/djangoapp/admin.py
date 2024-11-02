from django.contrib import admin
from .models import CarMake, CarModel


# Register your models here.


# CarModelInline class
class CarModelInline(admin.TabularInline):
    """
    This class allows you to edit CarModel instances directly within
    the CarMake admin page. The extra attribute specifies how many empty
    forms to display for adding new CarModel instances.
    """

    model = CarModel
    extra = 1


# CarModelAdmin class
class CarModelAdmin(admin.ModelAdmin):
    list_display = ("name", "carType", "year", "car_make")
    list_filter = ["carType", "year"]
    search_fields = ["name", "car_make__name"]


# CarMakeAdmin class with CarModelInline
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ("name", "description")
    inlines = [CarModelInline]


# Register models here
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)
