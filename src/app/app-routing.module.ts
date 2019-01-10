import { NgModule } from '../../node_modules/@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ]
})

export class AppRoutingModule { }
