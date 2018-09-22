import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearLoaderComponent } from './linear-loader/linear-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinearLoaderComponent],
  exports: [LinearLoaderComponent]
})
export class SharedModule { }
