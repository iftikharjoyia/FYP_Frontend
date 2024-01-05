import { Component } from '@angular/core';
import { GetqouteService } from 'src/app/services/getqoute.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent {
  combinedDetailsList:any;

  constructor(
    private combinedDetailService:GetqouteService,

  ){}
  ngOnInit(): void {
    this.fetchCombinedDetail();
  }
  
  fetchCombinedDetail(): void {
      this.combinedDetailService.getCombinedDetail().subscribe((Response) => {
        if (Response.status == 201 || Response.status==200) {
          this.combinedDetailsList=Response["body"];
    
        }
      });
    }
  
}
