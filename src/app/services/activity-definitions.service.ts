import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityDefinitionsService {

  constructor(private http: HttpClient) { }

  public getDefinitions()
  {
    return this.http.get('/server/api/v1/activityDefinitions');
  }

  public create(definition)
  {
    return this.http.post('server/api/v1/activityDefinitions', {
      activityDefinitionName: definition.activityDefinitionName,
      activityDefinitionDescription: definition.activityDefinitionDescription,
      activityDefinitionEffort: definition.activityDefinitionEffort
    });
  }

  public get(definitionId)
  {
    return this.http.get('/server/api/v1/activityDefinitions/'+definitionId);
  }

  public update(definitionId, definition)
  {
    return this.http.put('/server/api/v1/activityDefinitions/'+definitionId, {
      activityDefinitionId: definitionId,
      activityDefinitionName: definition.activityDefinitionName,
      activityDefinitionDescription: definition.activityDefinitionDescription,
      activityDefinitionEffort: definition.activityDefinitionEffort
    });
  }

  public del(definitionId)
  {
    return this.http.delete('/server/api/v1/activityDefinitions/'+definitionId);
  }
}
