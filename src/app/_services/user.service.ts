import {Injectable} from '@angular/core';
import { API_URL } from 'src/constante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly client: HttpClient;
  constructor(private readonly http: HttpClient) {
    this.client = http;
  }

  public login(payload: any): Observable<any> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.client.post<any>(
      API_URL + 'user/login',
      payload,
      httpOptions
    );
  }

  public getUserProfile(token: string): Observable<any> {
    const httpOptions = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    return this.client.post<any>(
      API_URL + 'user/profile',
      {},
      httpOptions
    );
  }

  public putUserProfile(token, payload: any): Observable<any> {
    const httpOptions = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    };
    return this.client.post<any>(
      API_URL + 'user/login',
      payload,
      httpOptions
    );
  }

//  public async login(credentials): Promise<any> {
//     return fetch(API_URL + 'user/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     }).then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }
//       return response.json();
//     });
//   }

//  public async getUserProfile(token): Promise<any> {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         Authorization: 'Bearer ' + token,
//       },
//       body: JSON.stringify({}),
//     };

//     return fetch(API_URL + 'user/profile', requestOptions).then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error('Erreur lors de la récupération du profil utilisateur');
//       }
//       return response.json();
//     });
//   }

//  public async putUserProfile(token, dto): Promise<any> {
//     const requestOptions = {
//       method: 'PUT',
//       headers: {
//         Accept: 'application/json',
//         Authorization: 'Bearer ' + token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         firstName: dto.firstName,
//         lastName: dto.lastName
//       }),
//     };

//     return fetch(API_URL + 'user/profile', requestOptions).then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error('Erreur lors de la mise a jour du profil utilisateur');
//       }
//       return response.json();
//     });
//   }
}
