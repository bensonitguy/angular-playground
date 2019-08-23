import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Benson App';
  courses = [];
  post = {
    title:"Hello there buddy!!",
    isFavorite: true
  }
}
