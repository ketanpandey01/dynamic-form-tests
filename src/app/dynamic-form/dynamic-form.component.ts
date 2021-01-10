import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formConfig = []
  form: FormGroup;
  userGroup = {};

  constructor() { }

  ngOnInit(): void {
    for (let config of this.formConfig) {
      this.userGroup[config.name] = new FormControl(config.value || '')
    }
    this.form = new FormGroup(this.userGroup);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
