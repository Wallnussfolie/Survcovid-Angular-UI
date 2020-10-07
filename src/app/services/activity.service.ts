import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get('/server/api/v1/activities');
  }

  create(definition)
  {
    return this.http.post('/server/api/v1/activities', {
      activityDefinition: definition
    });
  }
}
