import { Component, OnInit } from '@angular/core';
import { EventDefinitionService } from '../../services/event-definition.service'

@Component({
  selector: 'app-event-definition',
  templateUrl: './event-definition.component.html',
  styleUrls: ['./event-definition.component.css']
})
export class EventDefinitionComponent implements OnInit {

  events = {};

  constructor(private service: EventDefinitionService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents()
  {
    this.service.listEventDefinitionsWR().subscribe(
      data => {
        this.events = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log('event definitions loaded')
      );
  }

}
