import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userFormData = [
    {
      name: 'name',
      value: '',
      type: 'text',
      id: 'name',
      inputType: 'input',
      required: true
    }, {
      name: 'address',
      value: '',
      type: 'text',
      id: 'address',
      inputType: 'input',
    }, {
      name: 'age',
      value: '',
      type: 'number',
      id: 'age',
      inputType: 'input',
    }, {
      name: 'telephone',
      value: '',
      type: 'tel',
      id: 'telephone',
      inputType: 'input',
    }, {
      name: 'sex',
      type: 'radio',
      inputType: 'input',
      options: [
        {
          id: 'male',
          label: 'male',
          value: 'male'
        },
        {
          id: 'female',
          label: 'female',
          value: 'female'
        }
      ]
    }, {
      name: 'country',
      value: '',
      type: '',
      id: 'name',
      inputType: 'select',
      options: [
        {
          label: 'Nigeria',
          value: 'nigeria'
        },
        {
          label: 'United States',
          value: 'us'
        },
        {
          label: 'UK',
          value: 'uk'
        }
      ]
    },
  ]
}
