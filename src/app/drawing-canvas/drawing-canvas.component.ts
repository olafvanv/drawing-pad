import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';


@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent implements AfterViewInit {

  @ViewChild('drawingCanvas') drawingCanvas: ElementRef;

  @Input() color;
  @Input() penWidth;

  private url: string = "http://localhost:8080";
  private socket;

  ctx: CanvasRenderingContext2D;
  penColor: string = "#000";
  // lineWidth: number = 1;

  constructor() { }

  private eventListener(canvas) {
    Observable
      .fromEvent(canvas, 'mousedown')
      .switchMap((e) => {
        return Observable
          .fromEvent(canvas, 'mousemove')
          .takeUntil(Observable.fromEvent(canvas, 'mouseup'))
          .takeUntil(Observable.fromEvent(canvas, 'mouseleave'))
          .pairwise()
      })
      .subscribe(res => {
        const rect = canvas.getBoundingClientRect();

        const prevPos = {
          x: res[0]["clientX"] - rect.left,
          y: res[0]["clientY"] - rect.top
        };

        const currPos = {
          x: res[1]["clientX"] - rect.left,
          y: res[1]["clientY"] - rect.top      
        };

        this.draw(prevPos, currPos);
      });
  }

  draw(previous, current){

    console.log(this.ctx);
    console.log(previous.x, previous.y);
    // this.ctx.beginPath();
    // this.ctx.lineWidth= 10;
    // this.ctx.strokeStyle="blue";
    // this.ctx.rect(20,20,10,10);
    // this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.penWidth;
    this.ctx.moveTo(previous.x, previous.y);
    this.ctx.lineTo(current.x, current.y);
    this.ctx.stroke();

  }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.drawingCanvas.nativeElement;

    canvasEl.width = 600;
    canvasEl.height = 400;
    
    this.ctx = canvasEl.getContext("2d");

    // this.ctx.strokeStyle = this.color;
    // this.ctx.lineWidth = this.lineWidth;

    this.eventListener(canvasEl);

  }

}
