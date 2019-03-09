import { Component, OnInit } from '@angular/core';
import { ModalConfig } from '../../../modules/shared/models/common';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public accessBoxState: string;
  public modalConfiguration: ModalConfig;

  constructor() {
    this.accessBoxState = 'login';
    this.modalConfiguration = {
      cmpName: 'siteDescriptionModal',
      modalWidth: 600,
      modalTitle: 'What We Do',
      hasCloseBtn: true
    };
  }

  ngOnInit() {}

  public changeAccessBoxState(state: string): void {
    this.accessBoxState = state;
  }
}
