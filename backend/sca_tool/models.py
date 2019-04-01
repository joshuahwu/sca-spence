from django.db import models

# Create your models here.

class Console(models.Model):
	message = models.CharField(max_length=500, blank=True)
