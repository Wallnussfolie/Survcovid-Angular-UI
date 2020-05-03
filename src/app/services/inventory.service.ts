import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory() {
    return this.http.get('/server/inventory/items?user_id=8');
  }

}
