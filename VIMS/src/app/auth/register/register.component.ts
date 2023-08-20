import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary classes
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm: FormGroup; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    this.signupForm = this.fb.group({
      // Define form controls with validators
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      // Handle form validation errors if needed
      return;
    }

    // Create an object with form data to send to the service
    const formData = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone,
      password: this.signupForm.value.password,
      roles: "ROLE USER"
    };

    // Call your register service here, passing formData
    this.authService.register(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201) {
        console.log(Response['body']);
        if (Response['body'].success) {
          console.log("Data is ", formData);
          this.router.navigateByUrl('/login');
        } else {
          // this.snack.open(Response['body'].message, 'OK');
        }
      } else {
        console.log("Error: ");
      }
    });
  }
}
