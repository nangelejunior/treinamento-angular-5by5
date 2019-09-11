import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserUtil } from '../utils/user.util';

@Injectable()
export class ManagerGuard implements CanActivate {
  canActivate() {
    return UserUtil.isInRole('manager');
  }

}
