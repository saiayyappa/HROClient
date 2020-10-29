import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8082';

  upsertUser(user: User, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/user?id=${userId}`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' });
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
