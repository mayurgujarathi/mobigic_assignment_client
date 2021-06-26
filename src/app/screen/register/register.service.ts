import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  headers: any;
  BASE_URL = environment.baseUrl;

  registerUrl = '/user/register';

  constructor(private httpClient: HttpClient) { }

  registerUser(user: any) {
    const headerVal = this.getHttpHeader();
    return this.httpClient.post(this.BASE_URL + this.registerUrl, user, { headers: headerVal });
  }

  getHttpHeader() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    
    return this.headers;
  }
}
