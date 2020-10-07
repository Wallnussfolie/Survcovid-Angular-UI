import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventDefinitionService {

  constructor(private http: HttpClient) { }

  listEventDefinitionsWR() {
    return this.http.get('/server/api/v1/eventDefinitions/listWithRequirements');
  }

  listEventDefinitions() {
    return this.http.get('/server/api/v1/eventDefinitions/list');
  }

  createEventDefinition(event)
  {
    console.log(event);
    return this.http.post('/server/api/v1/gameEventDefinitionCreationController', event);
  }
}
