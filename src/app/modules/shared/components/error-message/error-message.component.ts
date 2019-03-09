import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() group: FormGroup;
  @Input() errMessage: any; // TODO: any hatao

  constructor() {
    this.errMessage = '';
  }

  ngOnInit() {
  }

}
