import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-qoute',
  templateUrl: './choose-qoute.component.html',
  styleUrls: ['./choose-qoute.component.scss']
})
export class ChooseQouteComponent {
  constructor(private router:Router){}

  onBasic(){
    this.router.navigateByUrl("/paymentdetail")
  }
}
