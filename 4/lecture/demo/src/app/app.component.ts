import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  num: number;
  message: string;
  numbers: number[];
  students: any[];
  isMessage: boolean;
  display: string;
  items: string[];

  constructor() {
    console.log('constructor method running');
    this.num = 20;
    this.message = 'message 1';
    this.numbers = [2, 4, 5, 6];
    this.students = [
      {
        id: '20BD123123',
        full_name: 'Student 1',
        gpa: 3.9
      },
      {
        id: '20BD123124',
        full_name: 'Student 2',
        gpa: 3.5
      },
      {
        id: '20BD123125',
        full_name: 'Student 3',
        gpa: 3.4
      }
    ];
    this.isMessage = false;
    this.display = '';
    this.items = [];
  }

  btnClick(): void {
    this.isMessage = !this.isMessage;
  }

  addItem(): void {
    this.display = this.display.trim();
    if (this.display === '') {
      return;
    }
    this.items.push(this.display);
    this.display = '';
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
