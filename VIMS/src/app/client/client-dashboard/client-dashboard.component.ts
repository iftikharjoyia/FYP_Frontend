import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {
  isVehicleListVisible=false;
  isDriverListVisible=false;   
  isPoliciesListVisible=false;
  isProfilesListVisible=false;
  showMyVehicles(){
    this.isVehicleListVisible=true;
    this.isDriverListVisible=false;   
    this.isPoliciesListVisible=false;
    this.isProfilesListVisible=false;
    
    } 
    
    showMyDrivers(){
    this.isVehicleListVisible=false;
    this.isDriverListVisible=true;   
    this.isPoliciesListVisible=false;
    this.isProfilesListVisible=false;
    }
    
    showMyPolicies(){
    this.isVehicleListVisible=false;
    this.isDriverListVisible=false;   
    this.isPoliciesListVisible=true;
    this.isProfilesListVisible=false;
    }
    
    showMyProfiles(){
    this.isVehicleListVisible=false;
    this.isDriverListVisible=false;   
    this.isPoliciesListVisible=false;
    this.isProfilesListVisible=true;
    }
}
