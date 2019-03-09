import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpService } from './../modules/shared/services/http.service';
import { Response } from './../modules/shared/models/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService, private logger: NGXLogger) { }

  getUserInfo (): Observable<Response> {
    this.logger.debug('UserService::getUserInfo', 'Get logged in user details');
    return this.httpService.get(environment.URLs.APIEndPoint + 'user');
  }

  signout (): Observable<Response> {
    this.logger.debug('UserService::signout', 'Signing Out');
    return this.httpService.get(environment.URLs.APIEndPoint + 'signout');
  }

  validateCredentials (email: string, password: string): Observable<Response> {
    this.logger.debug('UserService::validateCredentials', 'Validate login credentials');
    const data = {
      email: email,
      password: password
    };
    return this.httpService.post(environment.URLs.APIEndPoint + 'login', data);
  }
}
