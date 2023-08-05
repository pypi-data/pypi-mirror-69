# Generated by Django 2.0 on 2017-12-30 13:43

import _socket
from django.db import migrations, models
import django_revision.revision_field
import edc_model_fields.fields.hostname_modification_field
import edc_model_fields.fields.userfield
import edc_model_fields.fields.uuid_auto_field
import edc_model.validators.date
import edc_utils
import edc_protocol.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SubjectScheduleHistory",
            fields=[
                (
                    "created",
                    models.DateTimeField(blank=True, default=edc_utils.date.get_utcnow),
                ),
                (
                    "modified",
                    models.DateTimeField(blank=True, default=edc_utils.date.get_utcnow),
                ),
                (
                    "user_created",
                    edc_model_fields.fields.userfield.UserField(
                        blank=True,
                        help_text="Updated by admin.save_model",
                        max_length=50,
                        verbose_name="user created",
                    ),
                ),
                (
                    "user_modified",
                    edc_model_fields.fields.userfield.UserField(
                        blank=True,
                        help_text="Updated by admin.save_model",
                        max_length=50,
                        verbose_name="user modified",
                    ),
                ),
                (
                    "hostname_created",
                    models.CharField(
                        blank=True,
                        default=_socket.gethostname,
                        help_text="System field. (modified on create only)",
                        max_length=60,
                    ),
                ),
                (
                    "hostname_modified",
                    edc_model_fields.fields.hostname_modification_field.HostnameModificationField(
                        blank=True,
                        help_text="System field. (modified on every save)",
                        max_length=50,
                    ),
                ),
                (
                    "revision",
                    django_revision.revision_field.RevisionField(
                        blank=True,
                        editable=False,
                        help_text="System field. Git repository tag:branch:commit.",
                        max_length=75,
                        null=True,
                        verbose_name="Revision",
                    ),
                ),
                ("device_created", models.CharField(blank=True, max_length=10)),
                ("device_modified", models.CharField(blank=True, max_length=10)),
                (
                    "id",
                    edc_model_fields.fields.uuid_auto_field.UUIDAutoField(
                        blank=True,
                        editable=False,
                        help_text="System auto field. UUID primary key.",
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                (
                    "subject_identifier",
                    models.CharField(max_length=50, verbose_name="Subject Identifier"),
                ),
                (
                    "visit_schedule_name",
                    models.CharField(
                        editable=False,
                        help_text='the name of the visit schedule used to find the "schedule"',
                        max_length=25,
                    ),
                ),
                ("schedule_name", models.CharField(editable=False, max_length=25)),
                ("onschedule_model", models.CharField(max_length=100)),
                ("offschedule_model", models.CharField(max_length=100)),
                (
                    "onschedule_datetime",
                    models.DateTimeField(
                        validators=[
                            edc_protocol.validators.datetime_not_before_study_start,
                            edc_model.validators.date.datetime_not_future,
                        ]
                    ),
                ),
                (
                    "offschedule_datetime",
                    models.DateTimeField(
                        null=True,
                        validators=[
                            edc_protocol.validators.datetime_not_before_study_start,
                            edc_model.validators.date.datetime_not_future,
                        ],
                    ),
                ),
                (
                    "schedule_status",
                    models.CharField(
                        choices=[
                            ("onschedule", "On schedule"),
                            ("offschedule", "Off schedule"),
                        ],
                        max_length=15,
                        null=True,
                    ),
                ),
            ],
        ),
        migrations.AlterUniqueTogether(
            name="subjectschedulehistory",
            unique_together={
                ("subject_identifier", "visit_schedule_name", "schedule_name")
            },
        ),
    ]
