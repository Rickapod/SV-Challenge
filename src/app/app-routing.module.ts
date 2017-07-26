import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { PostsComponent } from './posts.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { 
    path: '',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
    
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
}) 

export class AppRoutingModule {}