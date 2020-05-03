import { LodingService } from './../../../services/loding.service';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.component.html',
  styleUrls: ['./tecnicas.component.scss']
})
export class TecnicasComponent implements OnInit {

  tecnicas: any;
  constructor(private serviceConexion: ConexiondbService,
              private loding: LodingService) { }

  ngOnInit() {
    this.loding.iniciarLoding();
    this.getTecnicas();
  }

  getTecnicas() {
    this.serviceConexion.getTecnicas()
    .subscribe(datos => this.tecnicas =  this.filtar(datos));
  }

  filtar(datos: any[] ) {
    const resultado = Array.from(new Set(datos.map(s => s.Nombre_Tecnica)))
    // tslint:disable-next-line: variable-name
    .map( Nombre_Tecnica => {
        return {
            Id: datos.find(s => s.Nombre_Tecnica === Nombre_Tecnica).Id,
            Nombre_Tecnica,
            Imagen: datos.find(s => s.Nombre_Tecnica === Nombre_Tecnica).Imagen,
        };
    });
    this.loding.stopLoding();
    return resultado;
  }
}
