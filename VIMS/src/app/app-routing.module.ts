import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewsComponent } from './news/news.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';
import { AgentRegistrationComponent } from './agent-registration/agent-registration.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'insurance', component: InsuranceDetailComponent },
  { path: 'news', component: NewsComponent },
  { path: 'be-an-agent', component: AgentRegistrationComponent },
  // { path: 'admin-dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
  // { path: 'agent-dashboard', component: AgentDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MODERATOR'] } },
  // { path: 'client-dashboard', component: ClientDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
  // ... any other routes ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
