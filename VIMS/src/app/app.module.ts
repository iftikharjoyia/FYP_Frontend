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
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { FotorComponent } from './common/fotor/fotor.component';
import { HeaderComponent } from './common/header/header.component';
import { HomepageComponent } from './home/homepage/homepage.component';
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
    HomepageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    CommonModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
