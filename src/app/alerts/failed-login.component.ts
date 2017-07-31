import { Component } from '@angular/core';

import { Store } from '@ngrx/store';


@Component({
  selector: 'failedLoginAlert',
  templateUrl: './html/failedLogin.component.html',
  styleUrls: ['./stylesheets/failed-login.component.css'],
})
export class FailedLogin {
  public alert = 'Unrecognized email address, please try again';
  private displayAlert;

  constructor (
    private store: Store<any>) {
      store.select('displayAlert').subscribe(displayAlert => this.displayAlert = displayAlert)
  }
  


  closeAlert(): void {
    console.log('should close')
    this.store.dispatch({type:'FAILED_LOGIN', payload: false})
    console.log(this.displayAlert, this.alert)
    //disable the display of the alert
  }

}