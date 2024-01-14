import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent {
 
  status:boolean=false;
  isButtonVisible = false;
  isErrorVisible = false;

  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
    private userService:UserService
  ){}

  ngOnInit(): void {
  

  }

  

  validateCnic(): void {
    const formData = {
      cnic: (<HTMLInputElement>document.getElementById("cnic")).value,
      name: (<HTMLInputElement>document.getElementById("name")).value,
      verificationDate: (<HTMLInputElement>document.getElementById("dateofverification")).value,
      verificationStatus: (<HTMLInputElement>document.getElementById("statusofverification")).value,
    };
  
    this.getQouteService.getPersonalDetailsByCnic(formData.cnic).subscribe(
      (response) => {
        console.log(response);
  
        if (response.body) {
          // Data found
          this.isButtonVisible = true;
          this.isErrorVisible = false;
        } else {
          // Data not found or other error
          this.isButtonVisible = false;
          this.isErrorVisible = true;
        }
      },
      (error) => {
        // Handle error if needed
        this.isButtonVisible = false;
        this.isErrorVisible = true;
      }
    );
        
  }
  onSubmit(){
    const formData = {
      cnic: (<HTMLInputElement>document.getElementById("cnic")).value, 
      name:(<HTMLInputElement>document.getElementById("name")).value,
      verificationDate:(<HTMLInputElement>document.getElementById("dateofverification")).value,
      verificationStatus:(<HTMLInputElement>document.getElementById("statusofverification")).value,
      email:this.userService.getUserEmail(),

    };
    this.getQouteService.addPersonalDetails(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
        
      this.router.navigateByUrl('/adddriver');
      }});
  }

}


