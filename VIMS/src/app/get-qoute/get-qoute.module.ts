import { NgModule } from '@angular/core';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { ChooseQouteComponent } from './choose-qoute/choose-qoute.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    PersonalDetailComponent,
    VehicleInformationComponent,
    DriverDetailComponent,
    ChooseQouteComponent,
    PaymentComponent,

  ],
  imports: [
    
  ]
})
export class GetQouteModule { }
