import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface FormDataType {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formGroup: FormGroup;
  formData?: FormDataType;
  validCredential?: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // create login form
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(data: FormDataType) {
    this.formData = data;
    if (data.email === 'abc@gmail.com' && data.password === '123456') {
      this.validCredential = true;
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    } else {
      this.validCredential = false;
    }
    console.log(data);
  }
}
