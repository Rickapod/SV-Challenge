import { Component } from '@angular/core';
import { Router } from '@angular/router';



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
        this.router.navigate(['/posts']);
         // this.authGuard.canActivate(true);
      } else {
        // this.router.navigate(['/login'])
        // this.authGuard.canActivate(false);
      }
    }
    
  }

}

