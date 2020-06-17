import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public event = {};
  constructor(private tokenStorage: TokenStorageService, private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    this.eventService.nextEvent(this.tokenStorage.getUser()).subscribe(
      data => { console.log('Data: '+data); },
      err => console.log(err),
      () => console.log('events loaded')
      );
  }

}
