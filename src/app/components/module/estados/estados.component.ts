import { LodingService } from './../../../services/loding.service';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: any;
  constructor(private serviceConexion: ConexiondbService,
              private loding: LodingService) { }

  ngOnInit() {
    this.loding.iniciarLoding();
    this.getEstados();
  }

  getEstados() {
    this.serviceConexion.getEstados()
    .subscribe(datos => this.estados =  this.filtar(datos));
  }

  filtar(datos: any[] ) {
    const resultado = Array.from(new Set(datos.map(s => s.Nombre_Estado)))
    // tslint:disable-next-line: variable-name
    .map( Nombre_Estado => {
        return {
            Id: datos.find(s => s.Nombre_Estado === Nombre_Estado).Id,
            Nombre_Estado,
            Imagen: datos.find(s => s.Nombre_Estado === Nombre_Estado).Imagen,
        };
    });
    this.loding.stopLoding();
    return resultado;
  }
}
