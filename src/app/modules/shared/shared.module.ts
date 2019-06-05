import { SessionService } from './services/storage/session.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


import { LinearLoaderComponent } from './components/linear-loader/linear-loader.component';
import { LoaderService } from './services/loader.service';
import { ValidationRulesResolverService } from './services/validation-rules-resolver.service';
import { HttpService } from './services/http.service';
import { ModalDirective } from './diretives/modal.directive';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ErrorHandlerInterceptorService } from './services/error-handler-interceptor.service';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from './services/error-handler.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FormFieldWrapperComponent } from './components/form-field-wrapper/form-field-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: environment.URLs.APIEndPoint + 'logs',
      level: NgxLoggerLevel[environment.DebugLevel.Client],
      serverLogLevel: NgxLoggerLevel[environment.DebugLevel.Server]
    }),
  ],
  declarations: [
    LinearLoaderComponent,
    ModalDirective,
    ModalContainerComponent,
    ErrorMessageComponent,
    DropdownComponent,
    FormFieldWrapperComponent
  ],
  exports: [
    LinearLoaderComponent,
    ModalDirective,
    ModalContainerComponent,
    ErrorMessageComponent,
    DropdownComponent,
    FormFieldWrapperComponent
  ],
  entryComponents: [ModalContainerComponent],
  providers: [
    HttpClient,
    HttpService,

    LoaderService,
    ValidationRulesResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // },
    SessionService
  ]
})
export class SharedModule {}
