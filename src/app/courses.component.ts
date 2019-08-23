import { Component } from '@angular/core';
import CoursesService from './courses.service';

@Component({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <img [src]="imageUrl" />

    <div (click)="divIsClicked()">
        <button class="btn btn-primary" [class.active]="isActive" (click)="OnSave($event)">SAVE</button>
    </div>

    <input [value]="email" (keyup.enter)=" email = $event.target.value;onKeyUp()"/>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

    <div>
        <ul>
            <li>{{newcourses.title | uppercase}}</li>
            <li>{{newcourses.students | number }}</li>
            <li>{{newcourses.rating | number:'1.2-2'}}</li>
            <li>{{newcourses.releaseDate | date:'mediumDate'}}</li>
        </ul>
    </div>
    
    `
})

export class CoursesComponent{
  title = 'Courses Title';
  isActive = false;
  imageUrl = "https://images-na.ssl-images-amazon.com/images/I/21MjMFj7JAL._QL70_.jpg";
  courses;
  newcourses = {
    title: "Angular Course",
    students: 32123,
    rating: 2.1235,
    releaseDate: new Date()
  }
  email = "bensonitguy@gmail.com";

  onKeyUp(){
      console.log(this.email);
  }

  constructor(service:CoursesService){
      
      this.courses = service.getCourses();
  }
  
  divIsClicked(){
    console.log("div is clicked");
  }

  OnSave($event){
      $event.stopPropagation();
      console.log("save button clicked",$event);
  }
  
}