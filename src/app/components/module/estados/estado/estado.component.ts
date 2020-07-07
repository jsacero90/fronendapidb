

import { Component, OnInit } from '@angular/core';
import { LodingService } from '../../../../services/loding.service';
import { ConexiondbService } from '../../../../services/conexiondb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {


  estados: any;
  constructor(private serviceApi: ConexiondbService,
              private lodding: LodingService,
              private router: ActivatedRoute) { }


  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getEstado(this.getId());
  }


  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getEstado( id: string ) {
    const url = `/api/estados/${id}`;
    this.serviceApi.getIds(url).subscribe(data => {
      this.estados = data;
      this.lodding.stopLoding();
    });
  }

}

