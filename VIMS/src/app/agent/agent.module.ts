import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PoliciesComponent } from './policies/policies.component';


@NgModule({
  declarations: [
    AgentDashboardComponent,
    VehicleListComponent,
    DriverListComponent,
    ProfilesComponent,
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
