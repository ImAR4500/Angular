import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProcessPensionService {


  baseUrl: string = 'http://localhost:9085'
  

  constructor(private http: HttpClient) { }

  getPensionDetails(credentials:any)
  {
    return this.http.post( `${this.baseUrl}/pensionDetail`,credentials);
  }

  processPension(credentials:any)
  {
    return this.http.post(`${this.baseUrl}/processPension`,credentials);
  }

  getPensionerDetail(credentials:any) {

    console.log(credentials);
    return this.http.post(`${this.baseUrl}/pensionerDetail`,credentials);
  }

}

