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
  showCart: boolean = true;
  cart;
  emptyCart: boolean = false;

  constructor(
    private router: Router,
    private loginService: UserService,
    private remedyService: RemedyService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.invalidLogin = JSON.parse(localStorage.getItem("invalidLogin"));
    if (this.invalidLogin) {
      this.router.navigate(['sign-in']);
      alert('Login again!!!');
    }

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
    this.viewCart();
  }

  listAllTransactions() {
    this.cartService.getTransactionByUser(this.userId).subscribe(res => {
      this.carts = res;
    });
  }

  viewCart() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    console.log(this.cart);
    if(this.cart.totalCost == 0) {
      alert("Cart is Empty... Add some items");
      this.emptyCart = true;
    }
  }

  buy() {
    console.log('Buying in Progress...');
    this.cartService.processTransaction(JSON.parse(localStorage.getItem("cart")), this.userId).subscribe(res => {
      alert("Transaction Completed Successfully");
      localStorage.removeItem('cart');
      let cartObj = new Cart(res, '|', '|', 0);
      localStorage.setItem("cart", JSON.stringify(cartObj));
      this.viewCart();
    });
  }
}
