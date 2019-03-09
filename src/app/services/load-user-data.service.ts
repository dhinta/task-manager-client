import { SessionService } from './../modules/shared/services/storage/session.service';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

import { Response } from '../modules/shared/models/common';
import { NGXLogger } from 'ngx-logger';
import { UserService } from './user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadUserDataService implements Resolve<Observable<Response>> {

  constructor(
    private userService: UserService,
    private logger: NGXLogger,
    private router: Router,
    private sessionService: SessionService
  ) { }

  resolve (): Observable<Response | null> {
    this.logger.debug('LoadUserDataService::resolve', 'Resolve User information data');
    return this.userService.getUserInfo().pipe(
      catchError(err => {
        this.sessionService.delete('loggedIn');
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
