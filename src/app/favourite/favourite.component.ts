import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFavorite') isFavorite = true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
