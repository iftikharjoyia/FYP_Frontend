import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { PoliciesComponent } from './policies/policies.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { ProfilesComponent } from './profiles/profiles.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    SidebarComponent,
    VehicleListComponent,
    PoliciesComponent,
    DriversListComponent,
    ProfilesComponent,
    ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
