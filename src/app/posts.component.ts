import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

import { Post } from './classes/post';
import { Comment } from './classes/comment';


@Component({
  selector: 'posts',
  templateUrl: './html/posts.component.html',
  styleUrls: ['./stylesheets/posts.component.css']
})

export class PostsComponent implements OnInit {
  public user;
  private posts: Post[];
  private comments: Comment[];

  constructor (
    private postsService: PostsService, 
    private commentsService: CommentsService,
    private store: Store<any>) {
      store.select('user').subscribe(user => this.user = user)
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(post => {this.posts = post});
  }

  getComments() : void {
    this.commentsService.getComments().subscribe(comment => {this.comments = comment});
  }

  ngOnInit(): void {
    console.log('test');
    console.log(this.user.name);
    this.getPosts();
    this.getComments();
  }

}