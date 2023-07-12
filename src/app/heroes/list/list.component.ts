import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iromna','Hulk','Arañaman'];
  public deleteHero?: String;


  removeLastHEro():void{
 this.deleteHero =  this.heroNames.pop();
 console.log(this.deleteHero);
  }
}


