import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
  
    const formData = {
      username: (<HTMLInputElement>document.getElementById("username")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      phoneNumber: (<HTMLInputElement>document.getElementById("phone")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value,
      roles: ["ROLE_USER"]
    };
    console.log("Form Data",formData);
    
     this.authService.register(formData).subscribe((Response) => {
       console.log(Response);
       if (Response.status == 201) {
         console.log(Response['body']);
         if (Response['body'].success) {
           console.log("Data is ", formData);
           this.router.navigateByUrl('login');
         } else {
           // Handle registration failure
         }
       } else {
         console.log("Error: ");
       }
     });
  }
}
