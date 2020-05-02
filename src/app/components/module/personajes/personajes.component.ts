import { ConexiondbService } from './../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: any;
  constructor(private servicioApi: ConexiondbService ) { }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes() {
    this.servicioApi.getPersonajes().subscribe(datos => {
      console.log(datos);
      this.personajes = datos;
    });
  }
}
