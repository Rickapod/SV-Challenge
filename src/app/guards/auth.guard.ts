import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  private isLoggedIn = false;
  canActivate(bool) {
    if (bool) {
      this.isLoggedIn = true;
    }
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    if (!this.isLoggedIn) {
      // alert('unrecognized email')
    }
    return this.isLoggedIn
  } 
}