import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent {
  userOtp: string = ''; // Assuming you bind this variable to the user input in the HTML
  

  constructor(
    private forgetPasswordService: ForgetpasswordService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // Read the parameter from the route
    
  }

  onSubmit(): void {
    

    const formData = {
      body: (document.getElementById("otp") as HTMLInputElement).value,
      to:" ",
    };
    this.route.paramMap.subscribe(params => {
      const emailParam = params.get("to");
      formData.to = emailParam !== null ? emailParam : ''; // Set the 'to' property in formData
      
    });
  
    
    this.forgetPasswordService.verifyOTP(formData).subscribe(
      response => {
        console.log('OTP Verification Successful', response);

        // Handle successful verification, e.g., redirect to a new page
        this.router.navigate(['/reset-password', { to: formData.to }])
        
      },
      error => {
        console.error('Error verifying OTP', error);
        // Handle error, e.g., display an error message to the user
      }
    );
  }
}
