import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.formConfig = [
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
      },
    ]
    component.ngOnInit();
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const addressInput = compiled.querySelector('input[id="address"]');
    const nameInput = compiled.querySelector('input[id="name"]');

    expect(addressInput).toBeTruthy();
    expect(nameInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    const nameInput = form.controls.name;
    nameInput.setValue('John Peter');

    expect(form.valid).toBeTruthy();
  });

  it('should test input validity', () => {
    const nameInput = component.form.controls.name;
    const addressInput = component.form.controls.address;

    expect(nameInput.valid).toBeFalsy();
    expect(addressInput.valid).toBeTruthy();

    nameInput.setValue('John Peter');
    expect(nameInput.valid).toBeTruthy();
  });

  it('should test input errors', () => {
    const nameInput = component.form.controls.name;
    expect(nameInput.errors.required).toBeTruthy();

    nameInput.setValue('John Peter');
    expect(nameInput.errors).toBeNull();
  });;
});
