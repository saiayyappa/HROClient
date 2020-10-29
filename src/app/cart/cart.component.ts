import {Component, OnInit} from '@angular/core';

import {Cart} from '../model/cart';
import {CartService} from '../services/cart.service';
import {RemedyService} from '../services/remedy.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  roleCheck: boolean = false;
  userId: number;
  invalidLogin: boolean = false;
  carts: Array<Cart> = [];
  
  constructor(
    private router: Router,
    private loginService: UserService,
    private remedyService: RemedyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
    this.loginService.getUserById(this.userId).subscribe(res => {
      console.log(res);
      if (res.role == 'role_admin') {
        this.roleCheck = true;
      } else {
        this.roleCheck = false;
      }
      console.log(this.roleCheck)
    });
    this.listAllTransactions();
  }

  listAllTransactions() {
    this.cartService.getTransactionByUser(this.userId).subscribe(res => {
      this.carts = res;
    });
  }

}
