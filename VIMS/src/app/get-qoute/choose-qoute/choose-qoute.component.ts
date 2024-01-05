import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-choose-qoute',
  templateUrl: './choose-qoute.component.html',
  styleUrls: ['./choose-qoute.component.scss']
})
export class ChooseQouteComponent {
  constructor(private router:Router,
    private getQouteService:GetqouteService,
    private userService:UserService){}

  onBasic(){
    const formData = {
      packageName: "basic", 
      email:this.userService.getUserEmail(),

    };
    this.getQouteService.choosePackage(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
        
        this.router.navigateByUrl("/paymentdetail")
      }});
  }
    
    onStandard(){
    const formData = {
    packageName: "standard", 
    email:this.userService.getUserEmail(),

  };
  this.getQouteService.choosePackage(formData).subscribe((Response) => {
    console.log(Response);
    if (Response.status == 201 || Response.status==200) {
      
      this.router.navigateByUrl("/paymentdetail")
    }});
  }
  onPremium(){
    const formData = {
      packageName: "premium", 
      email:this.userService.getUserEmail(),

    };
    this.getQouteService.choosePackage(formData).subscribe((Response) => {
      console.log(Response);
      if (Response.status == 201 || Response.status==200) {
        
        this.router.navigateByUrl("/paymentdetail")
      }});
  }
}
