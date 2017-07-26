import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../classes/post';

@Injectable()

export class PostsService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor (private http: Http) {}

  getPosts(): Observable < Post[] >{
    let posts$ = this.http.get(this.postUrl)
      .map((res:Response) => res.json());
    return posts$;
  }
}