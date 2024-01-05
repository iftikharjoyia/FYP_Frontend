import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  personalDetailsList: any ; // Replace 'any' with the actual type of your personal details objects

  constructor(private personalDetailsService: GetqouteService) { }

  ngOnInit(): void {
    this.fetchAllPersonalDetails();
  }

  fetchAllPersonalDetails(): void {
    this.personalDetailsService.getAllPersonalDetails().subscribe((Response) => {
      if (Response.status == 201 || Response.status==200) {
        this.personalDetailsList=Response["body"];
  
      }
    });
  }
}
