import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userData: FormGroup;
  nameIsValid = true;
  ageIsValid = true;

  constructor(private fb: FormBuilder) {
    this.userData = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
    });
  }

  // ngOnInit() {
  //   this.userData.valueChanges.subscribe((changes) => {
  //     console.log('Form changes detected: ', changes);
  //     // You can perform actions or validations here based on the form changes
  //   });
  // }

  onFormSubmit() {
    console.log('hello');
    console.log(this.userData.value);
  }
}
