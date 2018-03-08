import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  color: string = "#000000";
  penWidth: number = 2;

  constructor(){}

  changeColor(color){
    this.color = color;
  }

  changePenWidth(width){
    this.penWidth = width
  }

}
