import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  @Output() stateChange: EventEmitter<string>;
  
  constructor(private formBuilder: FormBuilder) {
    this.stateChange = new EventEmitter();
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      repassword: '',
      phone: ''
    });
  }

  onSubmit () {
    console.log(this.registrationForm);
  }

  public setLogin (): void {
    this.stateChange.emit('login');
  }

}
