import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerURL = 'http://localhost:3000/auth/register';
  constructor(private http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post(this.registerURL, data);
  }
}
