# Generated by Django 3.0.3 on 2020-07-02 09:46

from django.conf import settings
from django.db import migrations, models
import website.helperFunctions


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('date_time', models.DateTimeField()),
                ('poster', models.ImageField(blank=True, default=website.helperFunctions.default_event_poster_path, upload_to=website.helperFunctions.event_poster_upload_path)),
                ('form_link', models.URLField(blank=True)),
                ('publicity_message', models.TextField(blank=True)),
                ('venue', models.CharField(blank=True, max_length=100)),
                ('contacts', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('editable_by', models.ManyToManyField(related_name='editable_by', to=settings.AUTH_USER_MODEL)),
                ('sigs', models.ManyToManyField(related_name='sigs', to='account.SIG')),
            ],
        ),
    ]
