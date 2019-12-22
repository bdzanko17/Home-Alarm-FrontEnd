import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TesttService} from '../testt.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HistorijaComponent } from './historija/historija.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorijaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TesttService],
  bootstrap: [AppComponent]
})
export class AppModule { }
