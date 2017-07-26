import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Comment } from '../classes/comment';

@Injectable()

export class CommentsService {
  private commentsUrl : string ='https://jsonplaceholder.typicode.com/comments';
  
  constructor (private http: Http) {}

  getComments(): Observable < Comment[] > {
    let users$ = this.http.get(this.commentsUrl)
      .map((res:Response) => res.json());
     return users$;
  }
}
