import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalConfig } from './../../models/common';
import { DynamicLoaderService } from '../../services/dynamic-loaders.service';

@Component({
  selector: 'tm-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements AfterViewInit {
  @Input() modalConfig: ModalConfig;

  @Output() closeModal: EventEmitter<boolean>;

  @ViewChild('modalWrapper') modalWrapper: ElementRef;
  @ViewChild('modalBody', { read: ViewContainerRef })
  modalBody: ViewContainerRef;

  constructor(
    private dynamicLoadedSrv: DynamicLoaderService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.closeModal = new EventEmitter();
  }

  ngAfterViewInit() {
    this.init();
  }

  public init(): void {
    const modalComponent: any = this.dynamicLoadedSrv.get(
        this.modalConfig.cmpName
      ),
      componentFactory: any = this.componentFactoryResolver.resolveComponentFactory(
        modalComponent
      );
    // TODO: Remove any

    this.modalBody.clear();
    const componentRef = this.modalBody.createComponent(componentFactory);

    setTimeout(() => this.modalWrapper.nativeElement.classList.add('open'), 0);
  }

  public destroy(): void {
    this.closeModal.emit(true);
  }
}
