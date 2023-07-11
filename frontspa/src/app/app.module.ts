import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaModule } from './persona/persona.module';
import { HttpClientModule } from '@angular/common/http';
import { CiudadModule } from './ciudad/ciudad.module';
import { TipodocumentoModule } from './tipodocumento/tipodocumento.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonaModule,
    CiudadModule,
    TipodocumentoModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
