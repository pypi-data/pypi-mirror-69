# Generated by Django 2.2.6 on 2019-11-01 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("meta_lists", "0002_auto_20191026_2231")]

    operations = [
        migrations.CreateModel(
            name="HypertensionMedications",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        db_index=True,
                        help_text="This is the stored value, required",
                        max_length=250,
                        unique=True,
                        verbose_name="Stored value",
                    ),
                ),
                (
                    "display_name",
                    models.CharField(
                        db_index=True,
                        help_text="(suggest 40 characters max.)",
                        max_length=250,
                        unique=True,
                        verbose_name="Name",
                    ),
                ),
                (
                    "display_index",
                    models.IntegerField(
                        db_index=True,
                        default=0,
                        help_text="Index to control display order if not alphabetical, not required",
                        verbose_name="display index",
                    ),
                ),
                (
                    "field_name",
                    models.CharField(
                        blank=True,
                        editable=False,
                        help_text="Not required",
                        max_length=25,
                        null=True,
                    ),
                ),
                (
                    "version",
                    models.CharField(default="1.0", editable=False, max_length=35),
                ),
            ],
            options={"ordering": ["display_index", "display_name"], "abstract": False},
        ),
        migrations.AddIndex(
            model_name="hypertensionmedications",
            index=models.Index(
                fields=["id", "display_name", "display_index"],
                name="meta_lists__id_50f1f2_idx",
            ),
        ),
    ]
