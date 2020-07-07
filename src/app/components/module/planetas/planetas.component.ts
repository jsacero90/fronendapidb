import { Component, OnInit } from '@angular/core';
import { ConexiondbService } from './../../../services/conexiondb.service';
import { LodingService } from './../../../services/loding.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {

  planetas: any;
  constructor(private lodding: LodingService,
              private serviceApi: ConexiondbService) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getPlanetas();
  }

  getPlanetas() {
    this.serviceApi.getPlanetas().subscribe(data => {
      this.planetas = data;
      this.lodding.stopLoding();
    });
  }

}
