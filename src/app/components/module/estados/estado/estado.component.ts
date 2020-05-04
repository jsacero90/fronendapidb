import { LodingService } from './../../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  estado: Estados;
  personajes: any;
  constructor( private dataService: ConexiondbService,
               private router: ActivatedRoute,
               private lodding: LodingService ) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getEstado(this.getId());
  }

  getEstado(id: string) {
    const url = `api/estados/${id}`;
    this.dataService.getIds(url).subscribe((data: Estados) => {
      this.estado = data;
      this.getEstados(data.Nombre_Estado);
      this.lodding.stopLoding();
    });
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getEstados(est: string) {
    this.dataService.getEstados().subscribe(data => {
      this.personajes = data.filter(
        (datos: { Nombre_Estado: string; }) => datos.Nombre_Estado === est);
    });
  }

}

export interface Estados {
  Id: string;
  Nombre_Personaje: string;
  Nombre_Estado: string;
  Descripcion: string;
  Imagen: string;
}
