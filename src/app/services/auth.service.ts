import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// define the signup URL
const AUTH_API = '/server/api/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // to send login requests to the backend
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  // to send register requests to the backend
  register(user): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

}
