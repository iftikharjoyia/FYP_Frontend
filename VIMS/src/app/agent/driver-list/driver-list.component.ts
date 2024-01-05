import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent {
  drivers: any;
  constructor(
    private driverService:GetqouteService,
  private userService:UserService
  ){}
  ngOnInit(): void {
    
    this.fetchDriversByEmail(this.userService.getUserEmail());
  }
  
    fetchDriversByEmail(email: string): void {

      this.driverService.getDriverByEmail(this.userService.getUserEmail()).subscribe((Response) => {
        if (Response.status == 201 || Response.status==200) {
          this.drivers=Response["body"];
    
        }
      });
    }
}
