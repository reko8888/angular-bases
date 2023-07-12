import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero.component";
import { ListComponent } from "../list/list.component";




@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class  HeroModule{}