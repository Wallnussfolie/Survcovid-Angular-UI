import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActivityDefinitionsService } from '../../../services/activity-definitions.service';

@Component({
  selector: 'app-definition-details',
  templateUrl: './definition-details.component.html',
  styleUrls: ['./definition-details.component.css']
})
export class DefinitionDetailsComponent implements OnInit {

  definition;
  definition_id;

  constructor(private route: ActivatedRoute, private activityDefinitions: ActivityDefinitionsService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.definition_id = id;
    this.getDefinition(id);
  }

  getDefinition(id) {
    this.activityDefinitions.get(id).subscribe(
      data => this.definition = data,
      err => console.log(err),
      () => console.log('definition loaded')
      );
  }

  deleteDefinition(id)
  {
    this.activityDefinitions.del(id).subscribe(
        data => {
          this.router.navigate(['/admin/activities']);
        },
        err => console.log(err),
        () => console.log('definition deleted')
      );
  }

}
