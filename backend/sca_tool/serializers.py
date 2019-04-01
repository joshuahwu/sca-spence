from rest_framework import serializers
from sca_tool.models import Console

class ConsoleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Console
		fields = '__all__'