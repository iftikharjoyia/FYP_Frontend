import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  register(requestModel:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', requestModel, { observe: 'response' });
  }
  signIn(requestModel: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', requestModel, { observe: 'response' });
  }
  isLoggedIn(): boolean {
    // Check if the JWT token is present and not expired
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
    return token !== null && !this.isTokenExpired(token);
  }
  private isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const expirationDate = decodedToken.exp * 1000; // Convert to milliseconds
      return expirationDate < Date.now();
    } catch (error) {
      return true; // If decoding fails or any other error, consider token as expired
    }
  }
}
