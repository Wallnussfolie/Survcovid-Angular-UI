import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activityService.getActivities().subscribe(
        data => { console.log(data);},
        err => { console.log(err);},
        () => { console.log('activities loaded'); }
      )
  }

}
