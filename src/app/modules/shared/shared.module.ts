import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearLoaderComponent } from './components/linear-loader/linear-loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinearLoaderComponent],
  exports: [LinearLoaderComponent],
  providers: [LoaderService]
})
export class SharedModule { }
