import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { UserService } from './user.service';

const EMAIL_API = 'http://localhost:8080/api/email/';


@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private http: HttpClient, private userService: UserService) {}

  requestOTP(requestModel: any): Observable<any> {
    return this.http.post(EMAIL_API + 'send', requestModel, { observe: 'response' });
  }
  
  
  verifyOTP(requestModel: any): Observable<any> {
    return this.http.post(EMAIL_API+ 'verify', requestModel, { observe: 'response' });
  } 
  
  resetPassword(requestModel: any): Observable<any> {
    return this.http.post(EMAIL_API+ 'changepassword', requestModel, { observe: 'response' });
  }
   

 

  
}


