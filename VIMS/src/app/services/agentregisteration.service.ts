import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
const Register_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AgentregisterationService {

  constructor(private http: HttpClient) {}

  registerAgent(requestModel: any): Observable<any> {
    return this.http.post(Register_API + 'auth/signupAgent', requestModel, { observe: 'response' });
  } 


  activateAgentByEmail(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = { email: email };

    return this.http.put<any>(`${Register_API}activateAgent`, null, { headers, params });
  }

  
  

  showAllAgents(role: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('role', role);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get(Register_API + 'getAllByRole', {  observe: 'response' ,headers, params });
  }

}
