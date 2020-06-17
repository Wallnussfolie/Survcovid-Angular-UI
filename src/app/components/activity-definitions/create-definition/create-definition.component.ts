import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityDefinitionsService } from '../../../services/activity-definitions.service';

@Component({
  selector: 'app-create-definition',
  templateUrl: './create-definition.component.html',
  styleUrls: ['./create-definition.component.css']
})
export class CreateDefinitionComponent implements OnInit {


  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';
  
  constructor(private activityDefinitions: ActivityDefinitionsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.activityDefinitions.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
        this.router.navigate(['/admin/activities']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

}
