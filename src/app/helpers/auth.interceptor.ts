import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { TokenStorageService} from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  /**
   * Gets the current HttpRequest, chanes it and forwards it to HttpHandlers handle() method.
   * It transforms HttpRequest object into an Observable<HttpEvents>.
   *
   * @param req - the request that needs to be transformed
   * @param next - represents the next interceptor in the chain of interceptors. The final 'next' in the chain is the Angular HttpClient.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
