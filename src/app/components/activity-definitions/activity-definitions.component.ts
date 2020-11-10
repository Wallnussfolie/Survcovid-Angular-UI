import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivityDefinitionsService } from '../../services/activity-definitions.service'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-activity-definitions',
  templateUrl: './activity-definitions.component.html',
  styleUrls: ['./activity-definitions.component.css']
})
export class ActivityDefinitionsComponent implements AfterViewInit, OnInit {

  definitions: any = {};
  displayedColumns = ["activityDefinitionId", "activityDefinitionName", "activityDefinitionDescription", "activityDefinitionEffort"];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private activityDefinitions: ActivityDefinitionsService) { }

  ngOnInit(): void {
    this.getDefinitions();
  }

  ngAfterViewInit() {
    this.definitions.sort = this.sort;
    this.definitions.paginator = this.paginator;
  }

  getDefinitions()
  {
    this.activityDefinitions.getDefinitions().subscribe(
      (data: any) => {
        console.log(data);
        this.definitions = new MatTableDataSource(data);
        console.log(this.definitions);
              },
      err => {
        console.log(err);
      },
      () => console.log('activities loaded')
      );
  }

}
