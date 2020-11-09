import {Component, Input, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: number;
  roleCheck: boolean = false;
  constructor(private router: Router, private loginService: UserService) {}

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
  }

  @Input()
  invalidLogin: boolean;

  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(['sign-in']);
    this.invalidLogin = true;
    localStorage.setItem("invalidLogin", "true");
    localStorage.removeItem("cart");
  }
}
