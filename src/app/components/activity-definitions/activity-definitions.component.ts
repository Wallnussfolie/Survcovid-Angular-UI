import { Component, OnInit } from '@angular/core';
import { ActivityDefinitionsService } from '../../services/activity-definitions.service'

@Component({
  selector: 'app-activity-definitions',
  templateUrl: './activity-definitions.component.html',
  styleUrls: ['./activity-definitions.component.css']
})
export class ActivityDefinitionsComponent implements OnInit {

  definitions = {};
  constructor(private activityDefinitions: ActivityDefinitionsService) { }

  ngOnInit(): void {
    this.getDefinitions();
  }

  getDefinitions()
  {
    this.activityDefinitions.getDefinitions().subscribe(
      data => {
        this.definitions = data
      },
      err => {
        console.log(err);
      },
      () => console.log('activities loaded')
      );
  }

}
