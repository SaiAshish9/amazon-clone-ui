import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('token');
    if (this.cookieService.check('token')) {
      return next.handle(httpRequest.clone({ setHeaders: { 'Authorization':`Bearer ${token}`} }));
    } else {
      return next.handle(httpRequest);
    }
  }
}
