import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PnoticiasComponent } from './components/pnoticias/pnoticias.component';

import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './components/body/body.component';
import { InicioComponent } from './components/module/inicio/inicio.component';
import { PersonajesComponent } from './components/module/personajes/personajes.component';
import { ObjetosComponent } from './components/module/objetos/objetos.component';
import { RazasComponent } from './components/module/razas/razas.component';
import { EstadosComponent } from './components/module/estados/estados.component';
import { PlanetasComponent } from './components/module/planetas/planetas.component';
import { TecnicasComponent } from './components/module/tecnicas/tecnicas.component';
import { EpisodiosComponent } from './components/module/episodios/episodios.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PersonajeComponent } from './components/module/personajes/personaje/personaje.component';
import { TecnicaComponent } from './components/module/tecnicas/tecnica/tecnica.component';
import { EpisodioComponent } from './components/module/episodios/episodio/episodio.component';
import { EstadoComponent } from './components/module/estados/estado/estado.component';
import { ObjetoComponent } from './components/module/objetos/objeto/objeto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PnoticiasComponent,
    BodyComponent,
    InicioComponent,
    PersonajesComponent,
    ObjetosComponent,
    RazasComponent,
    EstadosComponent,
    PlanetasComponent,
    TecnicasComponent,
    EpisodiosComponent,
    PersonajeComponent,
    TecnicaComponent,
    EpisodioComponent,
    EstadoComponent,
    ObjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
