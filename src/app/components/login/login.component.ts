import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  @Output() stateChange: EventEmitter<string>;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { 
    this.stateChange = new EventEmitter();
    this.route.data.subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  public onSubmit (): void {
    console.log(this.loginForm);
  }

  public setRetrieve (): void {
    this.stateChange.emit('retrieveCreds');
  }

}
