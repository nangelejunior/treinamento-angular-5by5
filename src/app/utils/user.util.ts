import { User } from '../models/user.model';

export class UserUtil {
  static getUser(): User {
    const data = localStorage.getItem('user');
    if (data)
      return JSON.parse(data);

    return null;
  }

  static setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static removeUser() {
    localStorage.removeItem('user');
  }

  static isInRole(role: string): boolean {
    const user: User = this.getUser();

    if (!user || !user.roles || user.roles.length == 0) {
      return false;
    }

    return user.roles.includes(role);
  }
}
