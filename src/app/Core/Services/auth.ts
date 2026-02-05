import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private httpClient: HttpClient) { }

  registerApi(data: object): Observable<any> {

    return this.httpClient.post("http://localhost:4000/users", data);
  }

  loginApi(): Observable<any> {
    return this.httpClient.get("http://localhost:4000/users");
  }

}
