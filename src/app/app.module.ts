import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers/user.reducer'
import { AlertReducer } from './reducers/alert.reducer'

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PostsComponent } from './posts.component';
import { FailedLogin } from './alerts/failed-login.component';


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
    StoreModule.forRoot({ user: UserReducer, displayAlert: AlertReducer, }),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    FailedLogin,
  ],
  providers: [
    PostsService,
    UsersService,
    CommentsService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
