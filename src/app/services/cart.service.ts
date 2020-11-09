import {Cart} from '../model/cart';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8082';

  processTransaction(cart: Cart, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/cart?id=${userId}`, cart, {responseType: 'text'});
  }

  getTransactionByUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cart/${userId}`);
  }
}
