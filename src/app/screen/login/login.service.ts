import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers: any;
  BASE_URL = environment.baseUrl;
  loginUrl = '/user/login';

  constructor(private httpClient: HttpClient) { }

  login(user: any) {
    const headerVal = this.getHttpHeader();
    return this.httpClient.post(this.BASE_URL + this.loginUrl, user, { headers: headerVal });
  }  

  getHttpHeader() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    
    return this.headers;
  }
}
