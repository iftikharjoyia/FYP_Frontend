import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  random4Digits!: number;
  

  constructor(
    private  forgetPasswordService: ForgetpasswordService,
    private router:Router
  ) {
    this.generateRandom4Digits();
  }

  generateRandom4Digits(): void {
    this.random4Digits = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(this.random4Digits+"");
  }

  onSubmit(): void {
    const formData = {
      to: (document.getElementById("email") as HTMLInputElement).value,
      subject:"OTP VERIFICATION PASSWORD",

    };
    this.forgetPasswordService.requestOTP(formData).subscribe(
      response => {
        if(response.status===200){
        console.log('OTP Request Successful', response);
        this.router.navigate(['/verify-otp', { to: formData.to }]);

        }
        if(response.status===400){
          console.log('OTP Request Failed', response);
          this.router.navigateByUrl('/forgetpassword');
          }
      },
      error => {
        console.error('Error sending OTP', error);
      }
    );
    
  }
}
