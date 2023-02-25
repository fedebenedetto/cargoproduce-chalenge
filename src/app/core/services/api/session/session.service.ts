import { Injectable } from '@angular/core';
import { TOKEN } from 'src/app/core/constants/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(token: string) {
    sessionStorage.setItem(TOKEN, token)
  }

  getToken() {
    const token = sessionStorage.getItem(TOKEN);

    if (environment.develop) {
      return environment.token;
    }

    if (token) {
      return token;
    }

    return null;
  }
}
