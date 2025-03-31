# Generated by Django 5.1.7 on 2025-03-31 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default=-12, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='count',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='product',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
