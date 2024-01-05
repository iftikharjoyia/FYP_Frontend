import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  personalDetailsList:any;
  
  constructor(
    private personalDetailsService:GetqouteService,
  private userService:UserService
  ){}
  ngOnInit(): void {
    
    this.fetchProfiles(this.userService.getUserEmail());
  }
  
    fetchProfiles(email: string): void {

      this.personalDetailsService.getPersonalDetailsByEmail(this.userService.getUserEmail()).subscribe((Response) => {
        if (Response.status == 201 || Response.status==200) {
          this.personalDetailsList=Response["body"];
    
        }
      });
    }
}

