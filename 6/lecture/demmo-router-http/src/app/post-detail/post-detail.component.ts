import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  loaded: boolean = false;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: PostsService) { }

  ngOnInit(): void {
    // const id = +(this.route.snapshot.paramMap.get('id') || '0');
    // this.post = POSTS.find(x => x.id === id);

    // this.route.paramMap.subscribe(params => {
    //   const id = +(params.get('id') || '0');
    //   this.post = POSTS.find(x => x.id === id);
    // });

    this.getPost();
  }

  getPost() {
    this.route.paramMap.subscribe(params => {
      const id = +(params.get('id') || '0');
      this.loaded = false;
      this.postsService.getPost(id).subscribe(post => {
        this.post = post;
        this.loaded = true;
      });
    });
  }

  updatePost() {
    this.loaded = false;
    this.postsService.updatePost(this.post);
    this.loaded = true;
  }

  goBack() {
    this.location.back();
  }

}
