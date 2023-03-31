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

    def get_queryset(self, *args, **kwargs):
        status = kwargs.get('status', 0)
        queryset = Task.objects.filter(status=status).order_by('-created_at')
        return queryset
    
    def get(self, request, status):
        queryset = self.get_queryset(status=status)
        serializer = self.get_serializer_class()(queryset, many=True)
        return Response(serializer.data)


class UpdateTaskView(UpdateAPIView):
    serializer_class = UpdateTaskSerializer
    queryset = Task.objects.all()
    permission_classes = [AllowAny]
    authentication_classes = []
    lookup_field = 'id'