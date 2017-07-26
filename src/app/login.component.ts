import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store'
import { UserReducer } from './reducers/user.reducer';

import { UsersService } from './services/users.service';
import { User } from './classes/user'

import { AuthGuard } from './guards/auth.guard';

@Component({
  selector: 'login',
  templateUrl: './html/login.component.html',
  styleUrls: ['./stylesheets/login.component.css'],
})
export class LoginComponent {
  private users: User[];
  private isValidEmail: boolean = false;
  private emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  private email = '';

  constructor (
    private userService: UsersService, 
    private authGuard: AuthGuard,
    private router: Router,
    private store: Store<any>,
    ) {}

  getUsers() : void {
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  ngOnInit() : void {
    this.getUsers()
    console.log(this.users)
  }

  checkValid() {
    if (this.email.match(this.emailPattern)) {
      this.isValidEmail = false;
    } else {
      this.isValidEmail = true;
    }
  }

  login() {
    for (let user of this.users) {
      if (this.email === user.email) {
        this.store.dispatch({type: 'USER_LOGIN_SUCCESS', payload: user});
        this.authGuard.canActivate();
        this.router.navigate(['/posts'])
      } 
    }
  }
}

