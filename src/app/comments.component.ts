import { Component } from '@angular/core';

import { CommentsService } from './services/comments.service';

import { Post } from './classes/post';
import { Comment } from './classes/comment';

@Component({
  selector: 'comments',
  templateUrl: './html/comments.component.html',
  styleUrls: ['./stylesheets/comments.component.css']
})

export class CommentsComponent {
  private posts: Post[];
  private comments: Comment[];

  constructor (private commentsService: CommentsService) {}

  getComments() : void {
    this.commentsService.getComments().subscribe(comment => {this.comments = comment});
  }

  ngOnInit(): void {
    this.getComments();
  }

}