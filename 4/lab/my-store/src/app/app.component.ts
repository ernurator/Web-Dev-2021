import { Component } from '@angular/core';
import categories from './categories.json'
import { Category } from './category'

// export class Item {
//   name: string;
//   link: string;
//   imageLink: string;
//   description: string;
//   rating: number;
//   categoryId: number;
//   likes: number;
//   constructor(data: any) {
//     this.name = data?.name || '';
//     this.link = data?.link || '';
//     this.imageLink = data?.imageLink || '';
//     this.description = data?.description || '';
//     this.rating = data?.rating || 0;
//     this.categoryId = data?.categoryId || 0;
//     this.likes = data?.likes || 0;
//   }
// }

// export interface Category {
//   id: number,
//   name: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  categories: Category[];
  selectedCategory: Category;

  constructor() {
    this.categories = categories;
    this.selectedCategory = categories[0];
  }

}
