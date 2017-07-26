import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers/user.reducer'

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PostsComponent } from './posts.component';
// import { CommentsComponent } from './comments.component';


import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';

import { AuthGuard } from './guards/auth.guard'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    StoreModule.forRoot({ user: UserReducer })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    // CommentsComponent
  ],
  providers: [
    PostsService,
    UsersService,
    CommentsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
