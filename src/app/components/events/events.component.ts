import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  event;
  message;
  hasMessage = false;
  canContinue = false;
  constructor(private tokenStorage: TokenStorageService, private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvent();
    console.log(this.event);
  }

  getEvent() {
    this.eventService.nextEvent(this.tokenStorage.getUser()).subscribe(
      (data: any) => { 
        if (data.gameEvent)
        {
          console.log(data.gameEvent);
          this.event = data.gameEvent;
        }
        console.log(data);
       },
      err => { 
        this.message = err.error.message;
        this.hasMessage = true;
        console.log(this.hasMessage);
        console.log(err);
      },
      () => console.log('events loaded')
      );
  }

  respondEvent(choice) {
    this.eventService.respondEvent(this.tokenStorage.getUser(), this.event, choice).subscribe(
      (data: any) => {
        console.log(data);
        this.event = undefined;
        this.message = data.message;
        this.hasMessage = true;
        this.canContinue = true;
      },
      err => console.log(err),
      () => console.log('responded')
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
