import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  estado: Object;

  constructor(private conexionservicio: ConexiondbService,
              private router: ActivatedRoute ) { }


  ngOnInit() {
    this.getIdEstado(this.getIdUrl());
  }

  getIdEstado(id: string) {
    const url = `api/estados/${id}`;
    this.conexionservicio.getIds(url).subscribe(data => {
      console.log(data);
      this.estado = data;
   });
  }

  getIdUrl() {
    return this.router.snapshot.paramMap.get('Id');

  }

}
