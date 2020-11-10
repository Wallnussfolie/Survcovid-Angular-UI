import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EventDefinitionService } from '../../services/event-definition.service'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-event-definition',
  templateUrl: './event-definition.component.html',
  styleUrls: ['./event-definition.component.css']
})
export class EventDefinitionComponent implements AfterViewInit, OnInit {

  events: any = {};
  displayedColumns = ["id", "shortTitle", "description", "gameEventDefinitionType", "choices", "requirements"];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: EventDefinitionService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  ngAfterViewInit() {
    this.events.sort = this.sort;
    this.events.paginator = this.paginator;
  }

  getEvents()
  {
    this.service.listEventDefinitionsWR().subscribe(
      (data: any) => {
        console.log(data);
        this.events = new MatTableDataSource(data);
        console.log(this.events);
      },
      err => console.log(err),
      () => console.log('event definitions loaded')
      );
  }

}
