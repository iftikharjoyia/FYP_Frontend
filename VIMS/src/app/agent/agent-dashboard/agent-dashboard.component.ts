import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent {
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
