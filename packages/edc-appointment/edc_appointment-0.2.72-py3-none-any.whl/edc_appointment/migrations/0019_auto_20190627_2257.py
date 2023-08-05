# Generated by Django 2.2.2 on 2019-06-27 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("edc_appointment", "0018_auto_20190305_0123")]

    operations = [
        migrations.AddIndex(
            model_name="appointment",
            index=models.Index(
                fields=[
                    "subject_identifier",
                    "visit_schedule_name",
                    "schedule_name",
                    "visit_code",
                    "timepoint",
                    "visit_code_sequence",
                ],
                name="edc_appoint_subject_56a935_idx",
            ),
        )
    ]
