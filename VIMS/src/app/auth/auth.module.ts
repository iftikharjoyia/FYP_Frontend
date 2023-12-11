import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    VerifyOtpComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
AuthRoutingModule

  ]
})
export class AuthModule { }
