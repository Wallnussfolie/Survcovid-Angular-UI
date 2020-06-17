import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  nextEvent(user) {
    return this.http.get('/server/api/v1/event/next?user_id='+user.id);
  }
}
