from rest_framework.generics import ListCreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST

from apps.tasks.models import Task
from apps.tasks.serializers import TaskSerializer, UpdateTaskSerializer


class TaskView(ListCreateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all().order_by('-created_at')
    permission_classes = [AllowAny]
    authentication_classes = []


class UpdateTaskView(UpdateAPIView):
    serializer_class = UpdateTaskSerializer
    queryset = Task.objects.all()
    permission_classes = [AllowAny]
    authentication_classes = []
    lookup_field = 'id'