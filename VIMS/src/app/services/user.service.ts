import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userEmail: string = '';
  private userRoles: string[] = [];

  setUserDetails(email: string, roles: string[]): void {
    this.userEmail = email;
    this.userRoles = roles;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  getUserRoles(): string[] {
    return this.userRoles;
  }
}
