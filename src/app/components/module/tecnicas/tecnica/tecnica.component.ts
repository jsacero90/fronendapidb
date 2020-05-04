import { LodingService } from './../../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.scss']
})
export class TecnicaComponent implements OnInit {

  tecnica: Tecnicas;
  personajes: any;
  constructor( private dataService: ConexiondbService,
               private router: ActivatedRoute,
               private lodding: LodingService ) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getTecnica(this.getId());
  }

  getTecnica(id: string) {
    const url = `api/tecnicas/${id}`;
    this.dataService.getIds(url).subscribe((data: Tecnicas) => {
      this.tecnica = data;
      this.getTecnicas(data.Nombre_Tecnica);
      this.lodding.stopLoding();
    });
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getTecnicas(tec: string) {
    this.dataService.getTecnicas().subscribe(data => {
      this.personajes = data.filter(
        (datos: { Nombre_Tecnica: string; }) => datos.Nombre_Tecnica === tec);
    });
  }

}

export interface Tecnicas {
  Id: string;
  Nombre_Personaje: string;
  Nombre_Tecnica: string;
  Descripcion: string;
  Imagen: string;
}
