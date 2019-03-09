import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { Resolve, Router } from '@angular/router';
import { retryWhen, delay, take, map, catchError } from 'rxjs/operators';

import { Response } from '../models/common';
import { HttpService } from './http.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidationRulesResolverService implements Resolve<Observable<Response>> {
  constructor(private http: HttpService, private router: Router, private logger: NGXLogger) {}

  resolve(): Observable<Response> {
    this.logger.debug('ValidationRulesResolverService::resolve', 'Resolve validation rules data');
    let iHitCount = 1;
    return this.http.get(environment.URLs.APIEndPoint + 'validationRules').pipe(
      retryWhen(err => {
        return err.pipe(
          delay(1000),
          take(4),
          map(error => {
            if (++iHitCount === 5) {
              this.router.navigate(['/site-down',  {code: 'API'}]);
              // TODO: Show Error on Site-down page based on code
              return EMPTY;
            }
          })
        );
      }),
      catchError(err => throwError(err))
    );
  }
}
