import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post-model';
import { Observable, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {


  postsPerPage = 10;
  pageSizeOptions = [1, 2, 5, 10, 20, 50];
  currentPage = 1;
  postsListLenght;

  postsList: Array<Post>;
  displayPostList: Array<Post>;
  postsListSubs: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsListSubs = this.postService.getAllPosts().subscribe(data => {
      this.postsList = data;
      this.postsListLenght = data.length;
      this.slicePostToDisplayList();
    });
  }

  onChangedPage(event: PageEvent) {
    this.postsPerPage = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.slicePostToDisplayList();
  }

  slicePostToDisplayList() {
    let start;
    let end;
    if (this.currentPage - 1 === 0) {
      end = this.postsPerPage;
      start = 0;
    } else {
      start = (this.currentPage - 1) * this.postsPerPage;
      end = start + this.postsPerPage;
    }
    this.displayPostList = this.postsList.slice(start, end);
    console.table(this.displayPostList);
  }

  goToPost(id: number) {
    this.router.navigate(['post', id]);
  }

  ngOnDestroy() {
    this.postsListSubs.unsubscribe();
  }

}
