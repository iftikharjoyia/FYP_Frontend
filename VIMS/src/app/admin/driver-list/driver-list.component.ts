import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent {
  drivers: any; // Replace 'any' with the actual type of your driver objects

  constructor(private vehicleService: GetqouteService) { }

  ngOnInit(): void {
    this.fetchAllDrivers();
  }

  fetchAllDrivers(): void {
    this.vehicleService.getAllDrivers().subscribe((Response) => {
      if (Response.status == 201 || Response.status==200) {
        this.drivers=Response["body"];
  
      }
    });
  }
}
