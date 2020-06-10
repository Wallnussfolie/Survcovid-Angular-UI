import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


const API_URL = '/server/api';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {


  constructor(private http: HttpClient) { }

  getInventory(user) {
    return this.http.get(API_URL + '/inventory/items?user_id='+user.id);
  }

}
