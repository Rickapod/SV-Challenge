import { Component } from '@angular/core';

import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';

import { Post } from './classes/post';
import { Comment } from './classes/comment';

@Component({
  selector: 'posts',
  templateUrl: './html/posts.component.html',
  styleUrls: ['./stylesheets/posts.component.css']
})

export class PostsComponent {
  private posts: Post[];
  private comments: Comment[];

  constructor (private postsService: PostsService, private commentsService: CommentsService) {}

  getPosts(): void {
    this.postsService.getPosts().subscribe(post => {this.posts = post});
  }

  getComments() : void {
    this.commentsService.getComments().subscribe(comment => {this.comments = comment});
  }

  ngOnInit(): void {
    this.getPosts();
    this.getComments();
  }

}