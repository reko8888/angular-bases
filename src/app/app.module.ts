import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroModule } from './heroes/hero/hero.module';

@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
