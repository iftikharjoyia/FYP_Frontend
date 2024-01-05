import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetqouteService {
  private apiUrl = 'http://localhost:8080/api/personal-details/';

  constructor(private http: HttpClient) { }

  getPersonalDetailsByCnic(cnic: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('cnic', cnic);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get(this.apiUrl+'findbycnic', { observe: 'response' ,headers, params });
  }

  getDriverDetailsByLiecense(license: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('license', license);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/findbylicense', {  observe: 'response' ,headers, params });
  }

  getVehicleDetailsByRegistrationNumber(registrationNumber: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('registrationNumber', registrationNumber);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/findByRegistrationNumber', {  observe: 'response' ,headers, params });
  }


  addPersonalDetails(requestModel: any): Observable<any> {
    return this.http.post(this.apiUrl + 'addPersonalDetails', requestModel, { observe: 'response' });
  }
  addDriverDetails(requestModel: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/addDriverDetails', requestModel, { observe: 'response' });
  }
  addVehicleDetails(requestModel: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/addVehicleDetails', requestModel, { observe: 'response' });
  }
  choosePackage(requestModel: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/choose-package/save', requestModel, { observe: 'response' });
  }
  paymentDetails(requestModel: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/addPaymentDetails', requestModel, { observe: 'response' });
  }
   

  

  public getAllDrivers(): Observable<any>{
    return this.http.get('http://localhost:8080/api/getAllDrivers', { observe: 'response' });
}  
public getCombinedDetail(): Observable<any>{
  return this.http.get('http://localhost:8080/api/getCombinedDetails', { observe: 'response' });
}

 
  getDriverByEmail(email: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('email', email);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/getDriverDetailsByEmail', {  observe: 'response' ,headers, params });
  }

  getCombinedByEmail(email: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('email', email);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/getCombinedDetailsByEmail', {  observe: 'response' ,headers, params });
  }
  



  public getAllPersonalDetails(): Observable<any>{
    return this.http.get('http://localhost:8080/api/personal-details/getAllPersonalDetails', { observe: 'response' });
  } 
  public getAllVehicles(): Observable<any>{
    return this.http.get('http://localhost:8080/api/getAllVehicles', { observe: 'response' });
  }

  getVehiclesByEmail(email: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('email', email);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/getVehiclesByEmail', {  observe: 'response' ,headers, params });
  }

  getPersonalDetailsByEmail(email: string): Observable<any> {
    // Pass parameters in the request URL
    const params = new HttpParams().set('email', email);

    // Set headers if needed (adjust Content-Type accordingly)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if required
    });

    return this.http.get('http://localhost:8080/api/personal-details/getPersonalDetailsByEmail', {  observe: 'response' ,headers, params });
  }


 
}
