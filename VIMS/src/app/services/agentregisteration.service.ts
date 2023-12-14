import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
const Register_API = 'http://localhost:8080/api/agents/registerAgent';

@Injectable({
  providedIn: 'root'
})
export class AgentregisterationService {

  constructor(private http: HttpClient) {}

  registerAgent(requestModel: any): Observable<any> {
    return this.http.post(Register_API, requestModel, { observe: 'response' });
  } 
}
