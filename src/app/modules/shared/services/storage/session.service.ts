import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private logger: NGXLogger) { }

  set (key: string, val: any) {
    this.logger.debug('SessionService::set', 'Set ' + key + ' from session storage');
    sessionStorage.setItem(key, val);
  }

  get (key: string): string {
    this.logger.debug('SessionService::get', 'Get ' + key + ' from session storage');
    return sessionStorage.getItem(key);
  }

  delete (key: string) {
    this.logger.debug('SessionService::delete', 'Remove ' + key + ' from session storage');
    sessionStorage.removeItem(key);
  }

  clear () {
    this.logger.debug('SessionService::clear', 'Empty session storage');
    sessionStorage.clear();
  }
}
