from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def console(request):
	print("Do we get here?")
	print(request.GET['message'])
	message = request.GET['message']
	return HttpResponse(message)