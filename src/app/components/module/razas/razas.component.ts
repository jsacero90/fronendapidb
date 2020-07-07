import { Component, OnInit } from '@angular/core';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { LodingService } from './../../../services/loding.service';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss']
})
export class RazasComponent implements OnInit {

  razas: any;
  constructor(private lodding: LodingService,
              private serviceApi: ConexiondbService) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getRazas();
  }

  getRazas() {
    this.serviceApi.getRazas().subscribe(data => {
      this.razas = data;
      this.lodding.stopLoding();
    });
  }

}
