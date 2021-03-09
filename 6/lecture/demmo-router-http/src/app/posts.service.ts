import { Injectable } from '@angular/core';
import { POSTS } from './fake-db';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Post } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  // getPosts() {
  //   return of(POSTS);
  // }

  // getPost(id: number) {
  //   const post = POSTS.find(x => x.id === id)
  //   return of(post);
  // }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>(`${this.BASE_URL}/posts`, post);
  }

  updatePost(post: Post | undefined): Observable<Post> {
    return this.client.put<Post>(`${this.BASE_URL}/posts/${post?.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/posts/${id}`);
  }
}
