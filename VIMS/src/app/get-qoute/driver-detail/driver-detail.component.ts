import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent {
  isVisible=false;
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
    private userService:UserService,
  ){}
  ngOnInit(): void {
    this.validateLicense()
  
    }

  validateLicense(): void {
     
    const formData = {
      licenseNumber: (<HTMLInputElement>document.getElementById("license_number")).value
    };

    this.getQouteService.getPersonalDetailsByCnic(formData.licenseNumber).subscribe((Response) => {
      console.log(Response);
      this.isVisible=true;

      if (Response.status == 201 || Response.status==200) {
        console.log(Response["body"]);
      }
    });
        
  }


  onSubmit(){
    const formData = {
      licenseNumber: (<HTMLInputElement>document.getElementById("license_number")).value, 
      expiryDate:(<HTMLInputElement>document.getElementById("expiry_date")).value,
      dob:(<HTMLInputElement>document.getElementById("date_of_birth")).value,
      email:this.userService.getUserEmail(),
      

    };


    this.router.navigateByUrl('/addvehicle');
  }
}

