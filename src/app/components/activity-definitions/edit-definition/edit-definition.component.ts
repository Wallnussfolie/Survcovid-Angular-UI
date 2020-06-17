import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActivityDefinitionsService } from '../../../services/activity-definitions.service';

@Component({
  selector: 'app-edit-definition',
  templateUrl: './edit-definition.component.html',
  styleUrls: ['./edit-definition.component.css']
})
export class EditDefinitionComponent implements OnInit {

  definition;
  definition_id;
  errorMessage;
  isFailed = false;

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

  onSubmit() {
    this.activityDefinitions.update(this.definition_id, this.definition).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin/activities/', this.definition_id]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      },
      () => 'definition updated'
      );
  }

}
