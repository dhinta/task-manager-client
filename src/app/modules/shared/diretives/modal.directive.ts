import { Directive, HostListener, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { ModalConfig } from './../models/common';

@Directive({
  selector: '[tmModal]'
})
export class ModalDirective {

  @Input('tmModal') modalConfiguration: ModalConfig;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  @HostListener('click')
  openModal (): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);

    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    this.bindInputs(componentRef);
    this.closeModalEvent(componentRef, viewContainerRef);

  }

  public bindInputs (componentRef): void {
    (<ModalContainerComponent>componentRef.instance).modalConfig = this.modalConfiguration;
  }

  public closeModalEvent (componentRef, viewContainerRef): void {
    (<ModalContainerComponent>componentRef.instance).closeModal.subscribe(res => viewContainerRef.clear());
  }

}
