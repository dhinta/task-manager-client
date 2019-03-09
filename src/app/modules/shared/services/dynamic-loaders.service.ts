import { Injectable } from '@angular/core';
import { SiteDescriptionModalComponent } from './../../../components/site-description-modal/site-description-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicLoaderService {

  private components: object;
  constructor() {
    this.components = {
      siteDescriptionModal: SiteDescriptionModalComponent
    };
  }

  public get (key: string): any {
    // TODO: define the return type .. replace any
    return this.components[key];
  }
}
