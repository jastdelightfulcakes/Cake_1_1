# Generated by Django 4.0.4 on 2022-08-18 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Shape', models.CharField(max_length=50)),
                ('Width', models.CharField(max_length=50)),
                ('Cost', models.CharField(max_length=50)),
                ('Board_material', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Cake',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cake_Hight', models.FloatField(default='50', max_length=5)),
                ('cake_Width', models.FloatField(default='50', max_length=5)),
                ('cost', models.FloatField(default='50', max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Design',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Delivery_charges', models.FloatField(default='50', max_length=5)),
                ('Design_total_cost', models.FloatField(default='50', max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Design_Cakes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Template_Design',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]