import { UserService } from 'src/app/services/user.service';
import { SessionService } from './../../../modules/shared/services/storage/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'tm-private-base',
  templateUrl: './private-base.component.html',
  styleUrls: ['./private-base.component.scss']
})
export class PrivateBaseComponent implements OnInit {

  constructor(
    private router: Router,
    private logger: NGXLogger,
    private sessionService: SessionService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  signout () {
    this.logger.debug('PrivateBaseComponent:signout', 'Signing out');
    this.userService.signout().pipe(
      catchError(err => {
        this.logger.error('LoginComponent::onLoginResponse', err.message, err.stack);
        return err;
      })
    ).subscribe(res => {
      this.sessionService.clear();
      this.router.navigate(['/']);
    });
  }

  toggleUserTip () {
    alert('');
  }

}
