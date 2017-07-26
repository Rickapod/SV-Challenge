import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { User } from '../classes/user'

@Injectable ()

export class UsersService {
  private userUrl : string ='https://jsonplaceholder.typicode.com/users';
  
  constructor (private http: Http) {}

  getUsers(): Observable < User[] > {
    let users$ = this.http.get(this.userUrl)
      .map((res:Response) => res.json());
     return users$;
  }
}
