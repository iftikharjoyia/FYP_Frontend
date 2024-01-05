import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { UserService } from './user.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoles: string[] = [];

  constructor(private http: HttpClient, private userService: UserService) {}

  register(requestModel: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', requestModel, { observe: 'response' });
  }

  
  
  signIn(requestModel: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', requestModel, { observe: 'response' });
  }

  setUserRoles(roles: string[]): void {
    this.userRoles = roles;
  }

  getUserRoles(): string[] {
    return this.userRoles;
  }
}
