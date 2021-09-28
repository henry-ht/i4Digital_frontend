import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private baseUrl = environment.url;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token   = 'ijkkasdsadsa';
    let indexOf = request.url.indexOf(this.baseUrl);

    if (!token || indexOf == -1) {
      return next.handle(request);
    }

    let headers = request.clone({
                    headers: request.headers.set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
                  });

    return next.handle(headers);
  }
}