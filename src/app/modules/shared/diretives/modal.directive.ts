import { Directive, HostListener, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { iModalConfig } from './../models/common';

@Directive({
  selector: '[tmModal]'
})
export class ModalDirective {

  @Input('tmModal') modalConfiguration: iModalConfig;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  @HostListener('click')
  openModal (): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);

    let viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    this.bindInputs(componentRef);
    this.closeModal(componentRef, viewContainerRef);

  }

  public bindInputs (componentRef): void {
    (<ModalContainerComponent>componentRef.instance).modalConfig = this.modalConfiguration;
  }

  public closeModal (componentRef, viewContainerRef): void {
    (<ModalContainerComponent>componentRef.instance).closeModal.subscribe(res => viewContainerRef.clear());
  }

}
