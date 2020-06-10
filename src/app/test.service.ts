import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = '/server/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  // no adding of token data required here because we use Http Interceptor for this
  getPublicTestContent(): Observable<any> {
    return this.http.get(API_URL, {
      responseType: 'text'
    });
  }
}
