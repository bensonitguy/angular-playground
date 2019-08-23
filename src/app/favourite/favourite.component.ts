import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {

  @Input('isFavorite') isFavorite = true;
  //@Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    //this.change.emit("true");
  }
}
