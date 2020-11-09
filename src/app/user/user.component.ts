import {Component, OnInit} from '@angular/core';

import {RemedyService} from '../services/remedy.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  invalidLogin: boolean = false;
  userId: number;
  roleCheck: boolean = false;
  users: Array<User> = [];
  showUserForm: boolean = false;

  user: User;
  name: String;
  role: String;
  email: String;

  updateUserId: number;

  constructor(private router: Router, private loginService: UserService, private remedyService: RemedyService) {}

  ngOnInit(): void {
    this.invalidLogin = JSON.parse(localStorage.getItem("invalidLogin"));
    if(this.invalidLogin) {
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
    this.listAllUsers();
  }

  listAllUsers() {
    this.loginService.getUsers().subscribe(res => {
      res.map(user => {
        if (user.role == 'role_member' || user.id == this.userId) {
          this.users.push(user);
        }
      })
      this.showUserForm = false;
      console.log(this.users);
    })
  }

  updateUser(user: User) {
    this.updateUserId = user.id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
    this.showUserForm = true;
  }

  onSubmit() {
    this.user = new User(this.name, this.email, this.role, null, this.updateUserId);
    this.loginService.upsertUser(this.user, this.userId).subscribe(res => {
      this.showUserForm = false;
      this.listAllUsers()
    });
  }
}
