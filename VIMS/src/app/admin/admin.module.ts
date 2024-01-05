import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AgentSettingComponent } from './agent-setting/agent-setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { DriverListComponent } from './driver-list/driver-list.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  declarations: [
    DashboardComponent,
    VehicleListComponent,
    AgentSettingComponent,
    SidebarComponent,
    DriverListComponent,
    ProfilesComponent,
    PoliciesComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule
    
  ]
})
export class AdminModule { }
