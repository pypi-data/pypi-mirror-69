# Generated by Django 2.2.6 on 2019-10-24 07:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [("meta_consent", "0001_initial")]

    operations = [
        migrations.AlterField(
            model_name="subjectconsent",
            name="site",
            field=models.ForeignKey(
                editable=False,
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                related_name="+",
                to="sites.Site",
            ),
        )
    ]
