import { Component, OnInit } from '@angular/core';
import { ConexiondbService } from '../../../../services/conexiondb.service';
import { LodingService } from '../../../../services/loding.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {

  episodio: any;
  constructor(private serviceApi: ConexiondbService,
              private lodding: LodingService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getEpisosdio(this.getId());
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getEpisosdio( id: string) {
    const url = `/api/episodios/${id}`;
    this.serviceApi.getIds(url).subscribe(data => {
      this.episodio = data;
      this.lodding.stopLoding();
      console.log(data);
    });
  }

}
