import {Component, OnInit} from '@angular/core';

import {Cart} from '../model/cart';
import {Remedy} from '../model/remedy';
import {RemedyService} from '../services/remedy.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.css']
})
export class RemedyComponent implements OnInit {

  invalidLogin: boolean = false;
  roleCheck: boolean = false;
  userId: number;
  remedies = [];
  query: string;
  showRemedyForm: boolean = false;
  cartObj: Cart;

  remedy: Remedy;
  name: string;
  curesDisease: string;
  description: string;
  cost: number;

  constructor(private router: Router, private loginService: UserService, private remedyService: RemedyService) {}

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
    this.listAllRemedy();
  }

  listAllRemedy() {
    this.remedyService.getAllRemedies().subscribe(res => {
      this.remedies = res;
      console.log(this.remedies);
    })
  }

  search() {
    this.remedyService.search(this.query).subscribe(res => {
      if (res == 'query not found') {
        this.listAllRemedy();
        alert('Query not found... Try again');
      }
      this.remedies = res;
      console.log(this.remedies);
    });
  }

  upsertRemedy() {
    this.remedy = new Remedy(this.name, this.curesDisease, this.description, this.cost);
    this.remedyService.createOrUpdateRemedy(this.remedy, this.userId).subscribe(res => {
      console.log(res);
      this.showRemedyForm = false;
      this.listAllRemedy();
    });
  }

  addToCart(remedy: Remedy) {
    this.cartObj = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cartObj);
    this.cartObj = new Cart(this.userId, this.cartObj.items + remedy.name + '|', this.cartObj.quantities + '1|', this.cartObj.totalCost + remedy.cost);
    localStorage.setItem("cart", JSON.stringify(this.cartObj));
  }
}
