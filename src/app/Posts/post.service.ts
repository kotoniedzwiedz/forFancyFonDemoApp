import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from './post-model';
import { Comment } from './comment-model';
import { Observable } from 'rxjs';
import { User } from './user-model';

const BACKEND_URL_POSTS = environment.url + 'posts';
const BACKEND_URL_COMMENTS = environment.url + 'comments';
const BACKEND_URL_USERS = environment.url + 'users';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<Post>>  {
    return this.http.get<Array<Post>>(BACKEND_URL_POSTS);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(BACKEND_URL_POSTS + '/' + id);
  }

  getPostCommentsById(id: number): Observable<Array<Comment>> {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return this.http.get<Array<Comment>>(BACKEND_URL_COMMENTS + '?postId=' + id);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(BACKEND_URL_USERS + '/' + id);
  }

}
