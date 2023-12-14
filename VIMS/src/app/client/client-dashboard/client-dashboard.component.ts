import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {
  userEmail: string = '';
  userRoles: string[] = [];
  isVehicleListVisible = false;
 constructor(private userService: UserService){}
 ngOnInit(): void {
  this.userEmail = this.userService.getUserEmail();
  this.userRoles = this.userService.getUserRoles();
  console.log("Email", this.userEmail);
  console.log("userRoles",this.userRoles);
  
  
}
showMyComponent() {
  this.isVehicleListVisible = true;
}
}
