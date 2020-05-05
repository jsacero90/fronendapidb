import { ActivatedRoute } from '@angular/router';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { LodingService } from './../../../../services/loding.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {

  personaje;
  tecnicas;

  constructor(private ServicioLoad: LodingService,
              private ServicioConect: ConexiondbService,
              private ServicioRouter: ActivatedRoute) { }

  ngOnInit() {
    this.ServicioLoad.iniciarLoding();
    this.getPersonaje(this.getId());
  }

  getId() {
    return this.ServicioRouter.snapshot.paramMap.get('Id');
  }

  getPersonaje(id: string) {
    const url = `/api/personajes/${id}`;
    this.ServicioConect.getIds(url).subscribe(data => {
      // console.log(data);
      this.personaje = data;
      this.getTecnicas(data.Nombre);
      this.ServicioLoad.stopLoding();
    });
  }

  getTecnicas(nombre: string) {
    this.ServicioConect.getTecnicas().subscribe(data => {
      this.tecnicas = data.filter(
        (datos: { Nombre_Personaje: string; }) => datos.Nombre_Personaje === nombre);
      console.log(this.tecnicas);
    });
  }

}
