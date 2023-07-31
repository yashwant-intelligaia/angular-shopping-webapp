import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    const isAuth = this.auth.isAuthenticated();
    if (isAuth) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
