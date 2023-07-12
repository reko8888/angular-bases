import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
<hr>
<p>Hola </p>
<p>Contador = {{counter}}</p>
<button (click)="increaseBy(+1)"> +1</button>
<button (click)="resetBy()">reset</button>
<button (click)="increaseBy(-1)">-1</button>
    
    
    `
})

export class CounterComponent {
    constructor() { }
    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;
  
  
    increaseBy(value:number):void {
      this.counter +=value;
    }
    resetBy():void {
      this.counter =10;
    }

}