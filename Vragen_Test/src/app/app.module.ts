import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VragenComponent } from './vragen/vragen.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultaatComponent } from './resultaat/resultaat.component';

@NgModule({
  declarations: [
    AppComponent,
    VragenComponent,
    ResultaatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
