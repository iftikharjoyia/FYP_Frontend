import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userRoles: string[] = [];
  userEmail: string ='';
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
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
       if (Response.status == 201 || Response.status==200) {
        this.userEmail=Response['body'].email;
        this.userRoles=Response['body'].roles;
        this.userService.setUserDetails(this.userEmail,this.userRoles);
        this.authService.setUserRoles(this.userRoles); // Store user roles in AuthService

        if (this.userRoles.includes('ROLE_ADMIN')) {
          this.router.navigateByUrl('/admin-dashboard');
        } else if (this.userRoles.includes('ROLE_MODERATOR')) {
          this.router.navigateByUrl('/agent-dashboard');
        } else if (this.userRoles.includes('ROLE_USER')) {
          this.router.navigateByUrl('/client-dashboard');
        }
        
         console.log(Response['body']);
         if (Response['body'].success) {
           console.log("Data is ", formData);
         } else {
           // Handle registration failure
         }
       } else {
         console.log(" ");
       }
     });
     
     
  }
}
