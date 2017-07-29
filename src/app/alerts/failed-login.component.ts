import { Component } from '@angular/core';


@Component({
  selector: 'failedLoginAlert',
  templateUrl: './html/failedLogin.component.html',
  styleUrls: ['./stylesheets/failed-login.component.css'],
})
export class FailedLogin {
  public alert = 'Unrecognized email address, please try again';

  closeAlert(): void {
    
    //disable the display of the alert
  }

}