import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Response } from '../models/common';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private logger: NGXLogger) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<Response>> {
    this.logger.debug('ErrorHandlerInterceptorService::intercept', 'Intercept for Response');
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError({
          data: null,
          error: error.name + '-' + error.status
        });
      })
    );
  }
}
