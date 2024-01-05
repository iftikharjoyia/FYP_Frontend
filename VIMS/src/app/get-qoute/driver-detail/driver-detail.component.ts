import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent {
  isButtonVisible=false;
  Data: any;
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
    private userService:UserService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    
    this.validateLicense()
  
    }

  validateLicense(): void {
     
    const formData = {
      licenseNumber: (<HTMLInputElement>document.getElementById("license_number")).value
    };

    this.getQouteService.getDriverDetailsByLiecense(formData.licenseNumber).subscribe((Response) => {
    
      
      if (Response.status == 201 || Response.status==200) {
        console.log(Response["body"]);
        this.isButtonVisible=true;
      }
      else{
        this.isButtonVisible=false;

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
    console.log("FormData",FormData);
    
    this.getQouteService.addDriverDetails(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
      this.router.navigateByUrl('/addvehicle');
      }});

  }
}

