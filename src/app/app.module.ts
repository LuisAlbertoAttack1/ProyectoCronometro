import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometroComponent } from './proyecto/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent
    //Aqui se colocan las clases que muestran en tu vista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
