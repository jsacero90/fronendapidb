import { LodingService } from './../../../services/loding.service';
import { Component, OnInit } from '@angular/core';
import { ConexiondbService } from 'src/app/services/conexiondb.service';


@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  episodios: any;
  constructor(private serviceApi: ConexiondbService,
              private lodding: LodingService) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getEpisosdios();
  }

  getEpisosdios() {
    this.serviceApi.getEpisodios().subscribe(data => {
      this.episodios = data;
      this.lodding.stopLoding();
    });
  }

}
