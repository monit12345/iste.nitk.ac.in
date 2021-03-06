from django.db import models
from account.models import SIG

# Create your models here.
class Round(models.Model):
    name = models.CharField(
        default = "",
        max_length = 200
    )
    description = models.TextField()
    sig = models.ForeignKey(
        SIG,
        on_delete=models.CASCADE,
    )
    date_time = models.DateTimeField(
        auto_now=False,
        blank=True
    )
    isDone = models.BooleanField(
        default = False
    )

    def __str__(self):
        return self.name 