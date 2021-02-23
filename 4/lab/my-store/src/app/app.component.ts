import { Component } from '@angular/core';
import items from './items.json'

export interface item {
  name: string,
  link: string,
  imageLink: string,
  description: string,
  rating: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-store';
  items: item[];
  constructor() {
    this.items = items;
  }
}
