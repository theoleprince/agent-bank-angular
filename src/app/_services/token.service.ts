import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  signOut(): void{
    window.sessionStorage.clear();
  }

  saveToken(token): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    return JSON.parse(window.sessionStorage.getItem(USER_KEY));
  }

}
