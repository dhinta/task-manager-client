import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tm-retrieve-credentials',
  templateUrl: './retrieve-credentials.component.html',
  styleUrls: ['./retrieve-credentials.component.scss']
})
export class RetrieveCredentialsComponent implements OnInit {

  public retrieveForm: FormGroup;

  @Output() stateChange: EventEmitter<string>;

  constructor(private formBuilder: FormBuilder) {
    this.stateChange = new EventEmitter();
  }

  ngOnInit() {
    this.retrieveForm = this.formBuilder.group({
      'phoneNumber': ''
    });
  }

  public onSubmit (): void {
    console.log(this.retrieveForm);
  }

  public setLogin(): void {
    this.stateChange.emit('login');
  }

  public setRegister(): void {
    this.stateChange.emit('registration');
  }
}
