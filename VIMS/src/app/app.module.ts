import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsComponent } from './news/news.component';
import { AgentRegistrationComponent } from './agent-registration/agent-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { FotorComponent } from './common/fotor/fotor.component';
import { HeaderComponent } from './common/header/header.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { GetQouteModule } from './get-qoute/get-qoute.module';
import { PersonalDetailComponent } from './get-qoute/personal-detail/personal-detail.component';
import { ChooseQouteComponent } from './get-qoute/choose-qoute/choose-qoute.component';
import { PaymentComponent } from './get-qoute/payment/payment.component';
import { DriverDetailComponent } from './get-qoute/driver-detail/driver-detail.component';
import { VehicleInformationComponent } from './get-qoute/vehicle-information/vehicle-information.component';
import { ClientModule } from './client/client.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({ 
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    InsuranceDetailComponent,
    InsuranceComponent,
    NewsViewComponent,
    NewsComponent,
    AgentRegistrationComponent,
    FotorComponent,
    HeaderComponent,
    HomepageComponent,
    PersonalDetailComponent,
    ChooseQouteComponent,
    PaymentComponent,
    DriverDetailComponent,
    VehicleInformationComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    CommonModule,
    GetQouteModule,
    ClientModule,
    FormsModule,
    MatButtonModule
  

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
