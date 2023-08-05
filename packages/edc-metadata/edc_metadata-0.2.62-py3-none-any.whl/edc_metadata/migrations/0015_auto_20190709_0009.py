# Generated by Django 2.2.2 on 2019-07-08 22:09

import sys

from django.db import migrations
from edc_visit_schedule.site_visit_schedules import site_visit_schedules


def update_metadata_timepoint(apps, schema_editor):

    CrfMetadata = apps.get_model("edc_metadata", "CrfMetadata")
    RequisitionMetadata = apps.get_model("edc_metadata", "RequisitionMetadata")
    for visit_schedule in site_visit_schedules.visit_schedules.values():
        for schedule in visit_schedule.schedules.values():
            for visit in schedule.visits.values():
                visit_str = (
                    f"{visit_schedule.name}.{schedule.name}.{visit.code}@"
                    f"{visit.timepoint}"
                )
                sys.stdout.write(
                    f"  - updating CRF metadata timepoint for {visit_str}\n"
                )
                CrfMetadata.objects.filter(
                    visit_schedule_name=visit_schedule.name,
                    schedule_name=schedule.name,
                    visit_code=visit.code,
                    timepoint__isnull=True,
                ).update(timepoint=visit.timepoint)
                sys.stdout.write(
                    f"  - updating Requisition metadata timepoint for {visit_str}\n"
                )
                RequisitionMetadata.objects.filter(
                    visit_schedule_name=visit_schedule.name,
                    schedule_name=schedule.name,
                    visit_code=visit.code,
                    timepoint__isnull=True,
                ).update(timepoint=visit.timepoint)


class Migration(migrations.Migration):

    dependencies = [("edc_metadata", "0014_auto_20190707_0002")]

    operations = [migrations.RunPython(update_metadata_timepoint)]
