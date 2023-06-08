import { Component } from '@angular/core';
/*tslint:disable*/

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  login() {
    // Implement your login logic here
    console.log('Login button clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
