import { LodingService } from './../../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.scss']
})
export class ObjetoComponent implements OnInit {

  objeto: any;
  personajes: any;
  constructor( private dataService: ConexiondbService,
               private router: ActivatedRoute,
               private lodding: LodingService ) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getObjeto(this.getId());
  }

  getObjeto(id: string) {
    const url = `api/objetos/${id}`;
    this.dataService.getIds(url).subscribe(data => {
      this.objeto = data;
      this.getObjetos(data.Nombre_Objeto);
      this.lodding.stopLoding();
    });
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getObjetos(objeto: string) {
    this.dataService.getObjetos().subscribe(data => {
      this.personajes = data.filter(
        (datos: { Nombre_Objeto: string; }) => datos.Nombre_Objeto === objeto);
    });
  }

}
