import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Benson App';
  post = {
    title:"Hello there buddy!!",
    isFavorite: true
  }
}
