import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {


  

    constructor(private dbzServices: DbzService) { }

    get characters(): Character[]{
        return [...this.dbzServices.characters];
    }

    onDeleteCharacter(id:string):void{
        this.dbzServices.onDeleteCharacter(id);
    }
    onNewCharacter(caracter:Character){
        this.dbzServices.onNewCharacter(caracter);
    }
    ngOnInit() { }
}