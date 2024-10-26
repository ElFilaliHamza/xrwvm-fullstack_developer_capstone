from django.core.management.base import BaseCommand
from djangoapp.models import CarMake, CarModel


class Command(BaseCommand):
    help = 'Resets all related cars data tables on the django project'

    def handle(self, *args, **kwargs):
        CarMake.objects.all().delete()
        CarModel.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Successfully reset the table'))


