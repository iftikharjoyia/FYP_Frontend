import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private getQouteService: GetqouteService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.paymentForm = this.formBuilder.group({
      cardHolderName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      email: this.userService.getUserEmail()
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      const formData = this.paymentForm.value; // Use the form's value property

      console.log('FormData', formData);

      this.getQouteService.paymentDetails(formData).subscribe((Response) => {
        console.log(Response);
        if (Response.status == 201 || Response.status == 200) {
          this.router.navigateByUrl('/');
        }
      });
    } else {
      // The form is invalid, display error messages or handle accordingly
      console.log('Form is invalid. Please check the form fields.');
    }
  }
}
