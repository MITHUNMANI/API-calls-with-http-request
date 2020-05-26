import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {  // interface name

  constructor(public loginUser: UserService, public myRoute: Router) {
  }
  canActivate(): boolean {
    if (!this.loginUser.isLoggedIn()) {
      this.myRoute.navigateByUrl('/');
    }
    return this.loginUser.isLoggedIn();
  }
}
