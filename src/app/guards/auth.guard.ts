import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from '@ngrx/store';



@Injectable()
export class AuthGuard implements CanActivate {
  public user;

  constructor(
    private store: Store<any>) {
      store.select('user').subscribe(user => this.user = user)
  }

  canActivate() {
    if (this.user.email) {
      return true
    } else {
      return false
    }
  }

}