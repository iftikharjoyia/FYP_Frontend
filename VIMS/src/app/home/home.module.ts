import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FotorComponent } from './fotor/fotor.component';


@NgModule({
  declarations: [
    HomepageComponent,
    FotorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FotorComponent,
  ]
})
export class HomeModule { }
