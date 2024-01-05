import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  vehicles:any;
constructor(
  private vehicleService:GetqouteService,

){}

ngOnInit(): void {
  this.fetchAllVehicles();
}

  fetchAllVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe((Response) => {
      if (Response.status == 201 || Response.status==200) {
        this.vehicles=Response["body"];
  
      }
    });
  }

 
}
