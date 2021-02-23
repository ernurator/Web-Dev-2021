import { Component, Input, OnInit } from '@angular/core';
import { item } from '../app.component'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() declare item: item;
  constructor() {

  }

  getRating(): number {
    return Math.round(this.item.rating);
  }

  getShareLink(): string {
    return `https://t.me/share/url?url=${this.item.link}&text=${'Hi! Look what I\'ve found on the Amazon.'}`;
  }

  ngOnInit(): void {
  }

}
