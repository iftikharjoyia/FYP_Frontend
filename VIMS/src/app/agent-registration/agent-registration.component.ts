import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgentregisterationService } from '../services/agentregisteration.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.scss']
})
export class AgentRegistrationComponent {
constructor(private router: Router,
  private agentRegistrationService:AgentregisterationService){}

  onSubmit() {
  
    const formData = {
      username:(<HTMLInputElement>document.getElementById("username")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      phoneNumber: (<HTMLInputElement>document.getElementById("phoneNumber")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value,
      commision: (<HTMLInputElement>document.getElementById("commission")).value,
      companyType: (<HTMLInputElement>document.getElementById("companyType")).value,
      companyName: (<HTMLInputElement>document.getElementById("companyName")).value,
      status:"Not Verified",
      roles: ["mod"]


    };
    console.log("Form Data",formData);
    
     this.agentRegistrationService.registerAgent(formData).subscribe((Response) => {
       console.log(Response);
       if (Response.status == 201 || Response.status==200) {
         console.log(Response['body']);
         this.router.navigateByUrl('/login');

         if (Response['body'].success) {
           console.log("Data is ", formData);
         } else {
           // Handle registration failure
         }
       } else {
         console.log("Error: ");
       }
     });
  }



}

