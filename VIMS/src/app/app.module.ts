import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    InsuranceDetailComponent,
    InsuranceComponent,
    NewsViewComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
