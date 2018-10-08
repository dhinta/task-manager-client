import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LinearLoaderComponent } from './components/linear-loader/linear-loader.component';
import { LoaderService } from './services/loader.service';
import { ValidationRulesResolverService } from './services/validation-rules-resolver.service';
import { HttpService } from './services/http.service';
import { ModalDirective } from './diretives/modal.directive';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LinearLoaderComponent,
    ModalDirective,
    ModalContainerComponent
  ],
  exports: [LinearLoaderComponent, ModalDirective, ModalContainerComponent],
  entryComponents: [ModalContainerComponent],
  providers: [HttpClient, HttpService, LoaderService, ValidationRulesResolverService]
})
export class SharedModule { }
