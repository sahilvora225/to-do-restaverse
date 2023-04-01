from django.urls import path

from apps.tasks.views import TaskView, UpdateTaskView


app_name = 'tasks'

urlpatterns = [
    path('', TaskView.as_view(), name='task'),
    path('update/<int:id>/', UpdateTaskView.as_view(), name='update_task'),
]