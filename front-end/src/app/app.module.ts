import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HorarioFormComponent } from './horario/horario-form/horario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HorarioListComponent,
    HorarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
