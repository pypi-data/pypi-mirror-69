# Generated by Django 3.0.6 on 2020-05-16 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("meta_lists", "0007_auto_20200516_2356"),
        ("meta_subject", "0034_auto_20200517_0125"),
    ]

    operations = [
        migrations.AlterField(
            model_name="historicalmissedvisit",
            name="contact_made",
            field=models.CharField(
                choices=[("Yes", "Yes"), ("No", "No"), ("N/A", "Not applicable")],
                default="N/A",
                max_length=25,
                verbose_name="Was contact finally made with the participant?",
            ),
        ),
        migrations.AlterField(
            model_name="missedvisit",
            name="contact_made",
            field=models.CharField(
                choices=[("Yes", "Yes"), ("No", "No"), ("N/A", "Not applicable")],
                default="N/A",
                max_length=25,
                verbose_name="Was contact finally made with the participant?",
            ),
        ),
        migrations.AlterField(
            model_name="missedvisit",
            name="missed_reasons",
            field=models.ManyToManyField(
                blank=True, to="meta_lists.MissedVisitReasons"
            ),
        ),
    ]
