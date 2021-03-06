# Generated by Django 3.0.3 on 2020-07-02 14:56

import ckeditor_uploader.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=200)),
                ('tags', models.CharField(default='', max_length=200)),
                ('year', models.IntegerField(choices=[(2018, 2018), (2019, 2019), (2020, 2020)], default=2020)),
                ('description', ckeditor_uploader.fields.RichTextUploadingField()),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('sig', models.ManyToManyField(to='account.SIG')),
            ],
        ),
    ]
