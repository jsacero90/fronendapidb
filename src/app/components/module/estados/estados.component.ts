import { LodingService } from './../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: any[];
  ServiceConexion: any;
  constructor(private conexionservicio: ConexiondbService,
              private loding: LodingService) { }


ngOnInit() {
  this.loding.iniciarLoding();
  this.getEstados();
  }


getEstados() {
  this.ServiceConexion.getEstados()
  .suscribe(datos => {
    this.estados = datos;
    this.loding.stopLoding();
} );

}
}
