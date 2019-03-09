import { ActivatedRoute } from '@angular/router';
import { ValidationService } from './../../modules/shared/services/validation.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DefaultDropDownSelection } from 'src/app/modules/shared/models/common';
import { LibService } from 'src/app/modules/shared/services/lib.service';

@Component({
  selector: 'tm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  public validationMessages: any; // TODO: any hatao
  public days: DefaultDropDownSelection[];
  public months: DefaultDropDownSelection[];
  public years: DefaultDropDownSelection[];

  @Output() stateChange: EventEmitter<string>;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private validator: ValidationService,
    private libService: LibService
  ) {
    this.stateChange = new EventEmitter();
    this.activatedRoute.data.subscribe(res => this.validationMessages = res.validationRuleSet.data.authorizationMessages);
    this.initDate();
  }

  ngOnInit() {
    this.initForm ();
  }

  initDate () {
    this.initDays();
    this.initMonth();
    this.initYear();
  }

  initDays () {
    this.days = [];
    for (let i = 1; i <= 31; i++) {
      this.days.push({
        id: i,
        text: i.toString()
      });
    }
  }

  initMonth () {
    this.months = [{
      id: 'Jan',
      text: 'January'
    }, {
      id: 'Feb',
      text: 'February'
    }, {
      id: 'Mar',
      text: 'March'
    }, {
      id: 'Apr',
      text: 'April'
    }, {
      id: 'May',
      text: 'May'
    }, {
      id: 'Jun',
      text: 'June'
    }, {
      id: 'Jul',
      text: 'July'
    }, {
      id: 'Aug',
      text: 'August'
    }, {
      id: 'Sep',
      text: 'September'
    }, {
      id: 'Oct',
      text: 'October'
    }, {
      id: 'Nov',
      text: 'November'
    }, {
      id: 'Dec',
      text: 'December'
    }];
  }

  initYear () {
    this.years = [];
    const currYear = new Date().getFullYear();
    for (let i = (currYear - 50); i < currYear; i++) {
      this.years.push({
        id: i,
        text: i.toString()
      });
    }
  }

  initForm () {
    this.registrationForm = this.formBuilder.group({
      name: ['', this.validator.required(this.validationMessages.nameRequired)],
      email: ['',
        [
          this.validator.required(this.validationMessages.invalidEmail),
          this.validator.email(this.validationMessages.invalidEmail)
        ]
      ],
      pwd: this.formBuilder.group({
        password: [
          '',
          [
            this.validator.required(this.validationMessages.passwordRequired),
            this.validator.minLength(this.validationMessages.passwordLength, 6)
          ]
        ],
        repassword: ''
      }, { validator: this.validator.comparePassword(this.validationMessages.passwordMismatch) }),
      dob: this.formBuilder.group({
        day: '',
        month: '',
        year: ''
      }, {validator: this.validator.groupRequired(this.validationMessages.dobRequired)}),
      phone: ''
    });
  }

  onSubmit () {
    this.libService.validateAllFields(this.registrationForm);
  }

  public setLogin (): void {
    this.stateChange.emit('login');
  }

}
