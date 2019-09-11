import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserUtil } from '../utils/user.util';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() {
    const user = UserUtil.getUser();
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
