import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VragenComponent } from './vragen/vragen.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    VragenComponent,
    ResultaatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [VragenComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
