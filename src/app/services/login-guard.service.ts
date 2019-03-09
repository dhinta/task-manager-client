import { SessionService } from './../modules/shared/services/storage/session.service';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    private sessionService: SessionService,
    private logger: NGXLogger,
    private router: Router
  ) { }

  canActivate (next: ActivatedRouteSnapshot): boolean {
    this.logger.debug('LoginGuardService:canActivate', 'If Token exists');
    if (next.data && next.data.loginPage) {
      return this.loginPage();
    } else {
      return this.restrictedPages();
    }
  }

  loginPage (): boolean {
    this.logger.debug('LoginGuardService:loginPage', 'If login page');
    if (!!this.sessionService.get('loggedIn')) {
      this.router.navigate(['project/dashboard']);
      return false;
    } else {
      return true;
    }
  }

  restrictedPages (): boolean {
    this.logger.debug('LoginGuardService:restrictedPages', 'If restricted page');
    if (!!this.sessionService.get('loggedIn')) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
