import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='Ironman';
  public edad: number =45;

  get capitalizedName(): string{
  
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    debugger;
    return `${ this.name } - ${ this.edad }`;
  }

  changeHero():void{
    this.name = 'Cervezo';
  }
  changeAge():void{
    this.edad = 22;
  }
}
