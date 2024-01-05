import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent {
  combinedDetailsList:any;

  constructor(
    private combinedDetailService:GetqouteService,
    private userService:UserService

  ){}
  ngOnInit(): void {
    this.fetchCombinedDetail();
  }
  
  fetchCombinedDetail(): void {
      this.combinedDetailService.getCombinedByEmail(this.userService.getUserEmail()).subscribe((Response) => {
        if (Response.status == 201 || Response.status==200) {
          this.combinedDetailsList=Response["body"];
    
        }
      });
    }
  
}

