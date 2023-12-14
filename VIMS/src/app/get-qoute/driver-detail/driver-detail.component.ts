import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent {
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
  ){}
  onSubmit(){
    this.router.navigateByUrl('/addvehicle');
  }
}

