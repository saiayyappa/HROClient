import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {User} from 'src/app/model/user';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private loginService: UserService) {}

  ngOnInit(): void {
  }

  username: String;
  email: String;
  password: String;
  rPassword: String;
  role: String;

  onSubmit() {
    let user = new User(this.username, this.email, this.role, this.password);
    this.loginService.upsertUser(user, 0).subscribe(res => {
      console.log(res);
      this.router.navigate(['sign-in']);
    });
  }
}
