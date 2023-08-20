import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
  }

  // login(username: any, password: any) {
  //   this.authService.signIn({ username, password }).subscribe(
  //     response => {
  //       // Handle successful login, store JWT token, etc.
  //     },
  //     error => {
  //       // Handle login error
  //     }
  //   );
  // }
}
