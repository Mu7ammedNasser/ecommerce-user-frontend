import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private httpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  /** Reactive auth state – header and others should use this so UI updates without reload. */
  readonly userToken = signal<string | null>(null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.userToken.set(localStorage.getItem('user'));
    }
  }

  setUser(userJson: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user', userJson);
      this.userToken.set(userJson);
    }
  }

  clearUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
      this.userToken.set(null);
    }
  }

  updateUser(id: string, data: any) {
    return this.httpClient.put(`http://localhost:3000/users/${id}`, data);
  }

  registerApi(data: object): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', data);
  }

  loginApi(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }
}
