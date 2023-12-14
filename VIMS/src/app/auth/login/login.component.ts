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
        const previousRoute = localStorage.getItem('previousRoute');

        if (previousRoute === '/get-qoute' ) {
          // Do something specific when coming from '/get-quote'
          // You can clear the stored route if needed
          
      
          // Now, you can navigate to '/login' or any other logic you need
          this.router.navigate(['/get-qoute'], {
            queryParams: { returnUrl: '/get-qoute' },
            state: { roles: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_MODERATOR'] }

          });
        const previousRoute = localStorage.removeItem('previousRoute');

        } 
        else if (this.userRoles.includes('ROLE_ADMIN')) {
          this.router.navigateByUrl('/admin-dashboard');
        } else if (this.userRoles.includes('ROLE_MODERATOR')) {
          this.router.navigateByUrl('/agent-dashboard');
        } else if (this.userRoles.includes('ROLE_USER')) {
          this.router.navigateByUrl('/client-dashboard');
        }

        
        
       
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
