import { NgModule } from '../../node_modules/@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostComponent } from './Posts/post/post.component';
import { ChatComponent } from './chat/chat/chat.component';


const routes: Routes = [
  { path: '', component: PostListComponent, data: { animation: 'login' } },
  { path: 'post/:id', component: PostComponent, data: { animation: 'login' } },
  { path: 'chat', component: ChatComponent, data: { animation: 'chat' } },
  { path: '**', pathMatch: 'full', redirectTo: '', data: { animation: 'login' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ]
})

export class AppRoutingModule { }
