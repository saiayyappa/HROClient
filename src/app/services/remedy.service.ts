import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Remedy} from '../model/remedy';

@Injectable({
  providedIn: 'root'
})
export class RemedyService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8082';

  createOrUpdateRemedy(remedy: Remedy, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/remedy?id=${userId}`, remedy);
  }

  search(query: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/${query}`);
  }

  getRemedyByName(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/remedy/${name}`);
  }

  getRemediesForDisease(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/cure/${name}`);
  }

  getAllRemedies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/remedies`);
  }
}
