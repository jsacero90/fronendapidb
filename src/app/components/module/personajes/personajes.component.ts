import { LodingService } from './../../../services/loding.service';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: any;
  constructor(private servicioApi: ConexiondbService,
              private servicioLoad: LodingService ) { }

  ngOnInit() {
    this.servicioLoad.iniciarLoding();
    this.getPersonajes();
  }

  getPersonajes() {
    this.servicioApi.getPersonajes().subscribe(datos => {
      // console.log(datos);
      this.personajes = datos;
      this.servicioLoad.stopLoding();
    });
  }
}
