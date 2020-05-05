import { ConexiondbService } from './../../../services/conexiondb.service';
import { LodingService } from './../../../services/loding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: any;
  constructor(private lodding: LodingService,
              private serviceApi: ConexiondbService) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getEstados();
  }

  getEstados() {
    this.serviceApi.getEstados().subscribe(data => {
      this.estados = data;
      this.lodding.stopLoding();
      console.log(data);
    });
  }
}
