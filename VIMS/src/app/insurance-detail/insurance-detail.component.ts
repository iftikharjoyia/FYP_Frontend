import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-detail',
  templateUrl: './insurance-detail.component.html',
  styleUrls: ['./insurance-detail.component.scss']
})
export class InsuranceDetailComponent {

  constructor(private router:Router){}
  onSubmit(){
   

  
    this.router.navigateByUrl('/get-qoute');
}
}
