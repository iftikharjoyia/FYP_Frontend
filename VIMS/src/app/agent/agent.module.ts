import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';


@NgModule({
  declarations: [
    AgentDashboardComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
