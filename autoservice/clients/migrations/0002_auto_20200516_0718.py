# Generated by Django 3.0.5 on 2020-05-16 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='clients',
            options={'verbose_name': 'Клиент', 'verbose_name_plural': 'Клиенты'},
        ),
        migrations.AlterField(
            model_name='clients',
            name='phone_number',
            field=models.CharField(max_length=20, unique=True, verbose_name='номер телефона'),
        ),
    ]