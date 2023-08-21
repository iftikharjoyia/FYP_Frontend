import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }

  onSubmit() {
  
    const formData = {
      username: (<HTMLInputElement>document.getElementById("username")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value,
     
    };
    console.log("Form Data",formData);
    
     this.authService.signIn(formData).subscribe((Response) => {
       console.log(Response);
       if (Response.status == 201) {
         console.log(Response['body']);
         if (Response['body'].success) {
           console.log("Data is ", formData);
           this.router.navigateByUrl('home');
         } else {
           // Handle registration failure
         }
       } else {
         console.log(" ");
       }
     });
  }
}
