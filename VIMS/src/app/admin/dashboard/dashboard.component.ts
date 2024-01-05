import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isAgentSettingVisible=false;
  isBackupDatabaseVisible=false;
  isVehicleListVisible=false;
  isDriverListVisible=false;   
  isPoliciesListVisible=false;
  isProfilesListVisible=false;

  showMyAgentSettings(){
  this.isAgentSettingVisible=true;
  this.isBackupDatabaseVisible=false;
  this.isVehicleListVisible=false;
  this.isDriverListVisible=false;   
  this.isPoliciesListVisible=false;
  this.isProfilesListVisible=false;
  }
  showMyBackupDatabase(){
  this.isBackupDatabaseVisible=true;
  this.isVehicleListVisible=false;
  this.isAgentSettingVisible=false;
  this.isDriverListVisible=false;   
  this.isPoliciesListVisible=false;
  this.isProfilesListVisible=false;


  }
  showMyVehicles(){
  this.isVehicleListVisible=true;
  this.isBackupDatabaseVisible=false;
  this.isAgentSettingVisible=false;
  this.isDriverListVisible=false;   
  this.isPoliciesListVisible=false;
  this.isProfilesListVisible=false;
  
  } 
  
  showMyDrivers(){
  this.isVehicleListVisible=false;
  this.isBackupDatabaseVisible=false;
  this.isAgentSettingVisible=false;
  this.isDriverListVisible=true;   
  this.isPoliciesListVisible=false;
  this.isProfilesListVisible=false;
  }
  
  showMyPolicies(){
  this.isVehicleListVisible=false;
  this.isBackupDatabaseVisible=false;
  this.isAgentSettingVisible=false;
  this.isDriverListVisible=false;   
  this.isPoliciesListVisible=true;
  this.isProfilesListVisible=false;
  }
  
  showMyProfiles(){
  this.isVehicleListVisible=false;
  this.isBackupDatabaseVisible=false;
  this.isAgentSettingVisible=false;
  this.isDriverListVisible=false;   
  this.isPoliciesListVisible=false;
  this.isProfilesListVisible=true;
  }
  
}
