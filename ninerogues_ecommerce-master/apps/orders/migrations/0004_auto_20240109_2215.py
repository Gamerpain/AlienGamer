# Generated by Django 3.1.7 on 2024-01-10 03:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_auto_20231213_1516'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='shipping_name',
        ),
        migrations.RemoveField(
            model_name='order',
            name='shipping_price',
        ),
        migrations.RemoveField(
            model_name='order',
            name='shipping_time',
        ),
    ]
