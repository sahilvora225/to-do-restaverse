from django.db import models


class Task(models.Model):
    INCOMPLETE = 0
    COMPLETE = 1
    STATUS_CHOICES = (
        (INCOMPLETE, 'Incomplete'),
        (COMPLETE, 'Complete')
    )
    name = models.CharField(max_length=255)
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default=INCOMPLETE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)