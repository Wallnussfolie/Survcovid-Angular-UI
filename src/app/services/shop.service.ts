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

  buyItem(item, amount, user)
  {
    console.log(item.itemType.itemTypeId, user.id);
    return this.http.post('/server/api/inventory/items', {
      itemAmount: amount,
      itemTypeId: item.itemType.itemTypeId,
      userId: user.id
    });
  }
}
