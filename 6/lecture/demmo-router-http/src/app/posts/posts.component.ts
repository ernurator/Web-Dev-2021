import { Component, OnInit } from '@angular/core';
import { POSTS } from '../fake-db';
import { Post } from '../model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;
  newPost: string = '';
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const post = {
      title: this.newPost
    }

    this.postsService.addPost(post as Post).subscribe(post => {
      console.log(post);
      this.posts?.push(post);
      this.newPost = '';
    });
  }

  deletePost(id: number) {
    this.posts = this.posts?.filter(x => x.id !== id);
    this.postsService.deletePost(id).subscribe(() => {
      console.log("Deleted ", id);
    });
  }

}
