import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {  }

  getItems(user) {
    return this.http.get('/server/api/shop/stock?user_id='+user.id, {
      responseType: 'json',
    });
  }
}
