import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityDefinitionsService } from '../../services/activity-definitions.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  definitions;

  constructor(private activityService: ActivityService, private activityDefinitions: ActivityDefinitionsService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activityDefinitions.getDefinitions().subscribe(
        data => { this.definitions = data;},
        err => { console.log(err);},
        () => { console.log('activities loaded'); }
      )
  }

  createActivity(definition) {
    this.activityService.create(definition).subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('activity created')
      )
  }

}
