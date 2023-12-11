import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
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
      password: (document.getElementById("password") as HTMLInputElement).value,
      to:" ",
    };
    this.route.paramMap.subscribe(params => {
      const emailParam = params.get("to");
      formData.to = emailParam !== null ? emailParam : ''; // Set the 'to' property in formData
      
    });
    

    this.forgetPasswordService.resetPassword(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
        console.log(Response['body']);
        this.router.navigateByUrl('/login');

        if (Response['body'].success) {
          
        } else {
          // Handle registration failure
        }
      } else {
        console.log("Error: ");
      }
    });
    
  }
}
