import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss']
})
export class VehicleInformationComponent {
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
  ){}
  onSubmit(){
    this.router.navigateByUrl('/selectoffer');
  }
}
