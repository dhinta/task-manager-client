import { NGXLogger } from 'ngx-logger';
import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private logger: NGXLogger) { }

  handleError (error: any) {
    this.logger.error('ErrorHandlerService::handleError', error.message, error.stack);
  }
}
