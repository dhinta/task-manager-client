import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-form-field-wrapper',
  templateUrl: './form-field-wrapper.component.html',
  styleUrls: ['./form-field-wrapper.component.scss']
})
export class FormFieldWrapperComponent implements OnInit {

  @Input() labelFor: string;
  @Input() label: string;
  @Input('fa-icon') faIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
