import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post-model';
import { Comment } from '../comment-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User } from '../user-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  paramsSubs: Subscription;
  post: Post;
  postSubs: Subscription;
  author: User;
  authorSubs: Subscription;
  comments: Array<Comment>;
  commentsSubs: Subscription;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramsSubs = this.route.params.subscribe(params => {
      if (!params) {
        return this.router.navigate(['/']);
      }
      this.postSubs = this.postService.getPostById(params['id']).subscribe(data => {
        this.post = data;
        this.getPostData(data.id, data.userId);
      });
    });
  }

  getPostData(postId: number, userId: number) {
    this.commentsSubs = this.postService.getPostCommentsById(postId).subscribe(data => {
      this.comments = data;
    });
    this.authorSubs = this.postService.getUserById(userId).subscribe(data => {
      this.author = data;
    });
  }

  ngOnDestroy() {
    this.paramsSubs.unsubscribe();
    this.postSubs.unsubscribe();
    this.commentsSubs.unsubscribe();
    this.authorSubs.unsubscribe();
  }
}
