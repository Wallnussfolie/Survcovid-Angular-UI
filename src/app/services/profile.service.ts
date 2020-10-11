import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PasswordChangeRequestBody } from '../model/PasswordChangeRequestBody';
import { catchError, tap } from 'rxjs/operators';
import { MessageResponse } from '../model/MessageResponse';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

const API_URL = "/server/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  changePassword(currentPassword: string, newPassword: string, newPassword_2: string): Observable<MessageResponse> {

    let url = API_URL + "/changePassword";

    let passwordChangeRequestBody: PasswordChangeRequestBody = {
      currentPassword: "12345",
      newPassword: newPassword,
      newPassword_2: newPassword_2
    };

    return this.http.put<MessageResponse>(url,passwordChangeRequestBody).pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      // Return an observable with a user-facing error message.
      return throwError("An unknown client error occured. Please try again!");

    } else {

      // The backend returned an unsuccessful response code.
      
      // The response body may contain clues as to what went wrong.
      /*
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      */

      // Return an observable with a user-facing error message.
     return throwError("A server error occured. Please try again later!");
    }
  }



}
