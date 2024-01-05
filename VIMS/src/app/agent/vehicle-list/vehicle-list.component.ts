import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  vehicles: any;
  constructor(
    private vehicleService:GetqouteService,
  private userService:UserService
  ){}
  ngOnInit(): void {
    
    this.fetchVehiclesByEmail(this.userService.getUserEmail());
  }
  
    fetchVehiclesByEmail(email: string): void {

      this.vehicleService.getVehiclesByEmail(this.userService.getUserEmail()).subscribe((Response) => {
        if (Response.status == 201 || Response.status==200) {
          this.vehicles=Response["body"];
    
        }
      });
    }
}
