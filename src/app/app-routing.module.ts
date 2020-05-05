import { ObjetoComponent } from './components/module/objetos/objeto/objeto.component';
import { PersonajeComponent } from './components/module/personajes/personaje/personaje.component';
import { TecnicasComponent } from './components/module/tecnicas/tecnicas.component';
import { RazasComponent } from './components/module/razas/razas.component';
import { PlanetasComponent } from './components/module/planetas/planetas.component';
import { PersonajesComponent } from './components/module/personajes/personajes.component';
import { ObjetosComponent } from './components/module/objetos/objetos.component';
import { EstadosComponent } from './components/module/estados/estados.component';
import { EpisodiosComponent } from './components/module/episodios/episodios.component';
import { InicioComponent } from './components/module/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnicaComponent } from './components/module/tecnicas/tecnica/tecnica.component';
import { EpisodioComponent } from './components/module/episodios/episodio/episodio.component';
import { EstadoComponent } from './components/module/estados/estado/estado.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'episodios', component: EpisodiosComponent},
  { path: 'estados', component: EstadosComponent},
  { path: 'objetos', component: ObjetosComponent},
  { path: 'personajes', component: PersonajesComponent},
  { path: 'planetas', component: PlanetasComponent},
  { path: 'razas', component: RazasComponent},
  { path: 'tecnicas', component: TecnicasComponent},
  { path: 'personaje/:Id', component: PersonajeComponent},
  { path: 'tecnica/:Id', component: TecnicaComponent},
  { path: 'episodio/:Id', component: EpisodioComponent},
  { path: 'estado/:Id', component: EstadoComponent},
  { path: 'objeto/:Id', component: ObjetoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
