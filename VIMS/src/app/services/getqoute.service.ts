import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetqouteService {
  private apiUrl = 'http://localhost:8080/api/personal-details/findbycnic';

  constructor(private http: HttpClient) { }

  getPersonalDetailsByCnic(cnic: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('cnic', cnic);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get(this.apiUrl, { headers, params });
  }
}
