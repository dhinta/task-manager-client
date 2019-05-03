import { SessionService } from './../../modules/shared/services/storage/session.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { LibService } from './../../modules/shared/services/lib.service';
import { ValidationService } from './../../modules/shared/services/validation.service';
import { UserService } from 'src/app/services/user.service';
import { Response } from './../../modules/shared/models/common';

@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public validationMessages: any; // TODO: any hatao
  public commonErrorMsg: string;

  @Output() stateChange: EventEmitter<string>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private validator: ValidationService,
    private libService: LibService,
    private userService: UserService,
    private logger: NGXLogger,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.logger.debug('LoginComponent::constructor', 'Instantiated');
    this.stateChange = new EventEmitter();
    this.commonErrorMsg = '';
    this.route.data.subscribe(
      res =>
        (this.validationMessages = res.validationRuleSet.data)
    );
  }

  ngOnInit() {
    this.logger.debug('LoginComponent::ngOnInit');
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          this.validator.required(this.validationMessages.authorizationMessages.invalidEmail),
          this.validator.email(this.validationMessages.authorizationMessages.invalidEmail)
        ]
      ],
      password: [
        '',
        [
          this.validator.required(this.validationMessages.authorizationMessages.passwordRequired),
          this.validator.minLength(this.validationMessages.authorizationMessages.passwordLength, 6)
        ]
      ]
    });
  }

  public onLoginError (err: any) {
    this.commonErrorMsg = this.validationMessages.errorResponse[err.error];
  }

  public onLoginResponse (res: Response) {
    this.logger.debug('LoginComponent::onLoginResponse');
    try {
      if (res.data.success) {
        this.sessionService.set('loggedIn', true);
        this.router.navigate(['project/dashboard']);
      } else {
        this.commonErrorMsg = this.validationMessages.authorizationMessages[res.data.messages[0]];
      }
    } catch (e) {
      this.logger.error('LoginComponent::onLoginResponse', e.message, e.stack);
    }
  }

  public onSubmit(): void {
    this.logger.debug('LoginComponent::onSubmit', 'On login form submit');
    if (this.loginForm.valid) {
      this.userService.validateCredentials(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value
      ).subscribe(res => this.onLoginResponse(res), err => this.onLoginError(err));
    } else {
      this.libService.validateAllFields(this.loginForm);
    }
  }

  public setRegister(): void {
    this.logger.debug('LoginComponent::setRegister', 'Go to register');
    this.stateChange.emit('registration');
  }

  public setRetrieve(): void {
    this.logger.debug('LoginComponent::setRetrieve', 'Go to reset password');
    this.stateChange.emit('retrieveCreds');
  }
}
