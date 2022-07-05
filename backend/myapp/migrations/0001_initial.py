from django.db import migrations, models

#initialize the DB for Account Collection (But It will not be added...Because the collection element isn't added yet.)
class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('Username', models.CharField(max_length=500)),
                ('Password', models.CharField(max_length=500)),
            ],
        ),
    ]
