import {Component, OnInit} from '@angular/core';

import {Cart} from 'src/app/model/cart';
import {Router} from '@angular/router';
import {User} from 'src/app/model/user';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: String;
  password: String;
  invalidLogin: boolean = false;
  user: User;
  cartObj: Cart;
  constructor(private router: Router, private loginService: UserService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.user = new User(this.username, null, null, this.password, null);
    this.loginService.login(this.user).subscribe((res) => {
      console.log(res);
      if (res == 'fail') {
        this.invalidLogin = true;
      } else {
        this.router.navigate(['remedy']);
        this.invalidLogin = false;
        localStorage.setItem("invalidLogin", "false");
        localStorage.setItem("userId", res);
        this.cartObj = new Cart(res, '|', '|', 0);
        localStorage.setItem("cart", JSON.stringify(this.cartObj));
      }
    })
  }
}
