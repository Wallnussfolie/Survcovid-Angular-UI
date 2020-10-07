import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = '/server/api/v1/users';

@Injectable({
  providedIn: 'root'
})
// provides methods to access protected user data (just for testing purposes)
export class UserService {

  constructor(private http: HttpClient) { }

  // no adding of token data required here because we use Http Interceptor for this
  getUsers(): Observable<any> {
    return this.http.get(API_URL);
  }

  getUser(id)
  {
    return this.http.get(API_URL+"/"+id);
  }

  update(userId, user)
  {
    console.log(user);
    return this.http.put(API_URL+"/"+userId, user);
  }

  deleteUser(userId)
  {
    return this.http.delete(API_URL+"/"+userId);
  }

}
