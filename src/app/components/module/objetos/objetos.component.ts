import { Component, OnInit } from '@angular/core';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { LodingService } from './../../../services/loding.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.scss']
})
export class ObjetosComponent implements OnInit {

  objetos: any;
  constructor(private lodding: LodingService,
              private serviceApi: ConexiondbService) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getObjetos();
  }

  getObjetos() {
    this.serviceApi.getObjetos().subscribe(data => {
      this.objetos = data;
      this.lodding.stopLoding();
    });
  }

}
