import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  newRequest!: any;
  constructor(private _authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string | null = this._authService.token;
    let daDataToken: string = 'aba6c749e48c9b5dbd5a7700affcbf5eda50dfdb';

    console.log(req.url);
    if (
      req.url ===
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    ) {
      this.newRequest = req.clone({
        setHeaders: { Authorization: `Token ${daDataToken}` },
      });
    } else {
      this.newRequest = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(this.newRequest);
  }
}
