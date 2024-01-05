import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss']
})
export class VehicleInformationComponent {
  isButtonVisible=false;
  
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
    private userService:UserService,
    
  ){}
  ngOnInit(): void {
    
    this.validateVehicle()
  
    }

  validateVehicle(): void {
     
    const formData = {
      registrationNumber: (<HTMLInputElement>document.getElementById("registration_number")).value
    };

    this.getQouteService.getVehicleDetailsByRegistrationNumber(formData.registrationNumber).subscribe((Response) => {
    
      
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
      registrationNumber: (<HTMLInputElement>document.getElementById("registration_number")).value, 
      model:(<HTMLInputElement>document.getElementById("model")).value,
      color:(<HTMLInputElement>document.getElementById("color")).value,
      year:(<HTMLInputElement>document.getElementById("year")).value,
      email:this.userService.getUserEmail(),      

    };
    console.log("FormData",FormData);
    
    this.getQouteService.addVehicleDetails(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
      this.router.navigateByUrl('/selectoffer');
      }});

  }
}




