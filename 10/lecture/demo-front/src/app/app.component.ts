import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-front';

  logged = false;
  username = '';
  password = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private categoryService: CategoryService) {
  }

  login(): void {
    this.categoryService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout(): void {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
