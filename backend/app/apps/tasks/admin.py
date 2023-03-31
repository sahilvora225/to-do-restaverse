from django.contrib import admin

from apps.tasks.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    model = Task

    list_display = ['name', 'status', 'created_at', 'updated_at']