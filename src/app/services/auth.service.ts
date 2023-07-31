import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
