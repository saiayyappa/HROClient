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
  }

  @Input()
  invalidLogin: boolean;

  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(['sign-in']);
    this.invalidLogin = true;
  }
}
