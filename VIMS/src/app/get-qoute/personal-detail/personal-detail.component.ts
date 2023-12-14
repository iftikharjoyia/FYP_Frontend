import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent {
 
  status:boolean=false;
  constructor( 
 
    private getQouteService:GetqouteService,
    private router: Router,
  ){}
  isButtonVisible = true;

  ngOnInit(): void {
  

  }

  

  validateCnic(): void {
     
    const formData = {
      cnic: (<HTMLInputElement>document.getElementById("cnic")).value,     
    };

    this.getQouteService.getPersonalDetailsByCnic(formData.cnic).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
        console.log(Response["body"]);
        
        this.isButtonVisible=false;
      }
    });
        
  }
  onSubmit(){
    this.router.navigateByUrl('/adddriver');
  }

}


