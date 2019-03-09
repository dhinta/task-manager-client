import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { DefaultDropDownSelection } from '../../models/common';

@Component({
  selector: 'tm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public toggleDropDown: boolean;
  public selectedItem: DefaultDropDownSelection;

  @Input() multi: boolean;
  @Input() defaultSelection: DefaultDropDownSelection;
  @Input() data: DefaultDropDownSelection[];
  @Input() formGroupInstance: FormGroup;
  @Input() controlName: string;

  constructor() {
    this.toggleDropDown = false;
    this.multi = false;
    this.defaultSelection = {
      id: '',
      text: 'Select'
    };
  }

  ngOnInit() {
    this.selectedItem = this.defaultSelection;
    this.data.unshift(this.defaultSelection);

    // this.formGroupInstance.get('day').valueChanges.subscribe(val => {
    //   console.log(`My name is ${val}.`);
    // });
  }

  onChange () {
    console.log('there');
  }

  select (item: DefaultDropDownSelection) {
    this.selectedItem = item;
    this.formGroupInstance.controls[this.controlName].setValue(item.id.toString(), {onlySelf: true});

    setTimeout(() => this.formGroupInstance.controls[this.controlName].markAsDirty(), 1500);
    this.toggle();
  }

  toggle () {
    this.toggleDropDown = !this.toggleDropDown;
  }
}
