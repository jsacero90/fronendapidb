import { LodingService } from './../../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.scss']
})
export class PlanetaComponent implements OnInit {

  planeta: any;
  personajes: any;
  razas: any;
  constructor( private dataService: ConexiondbService,
               private router: ActivatedRoute,
               private lodding: LodingService ) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getPlaneta(this.getId());
  }

  getPlaneta(id: string) {
    const url = `api/planetas/${id}`;
    this.dataService.getIds(url).subscribe(data => {
      this.planeta = data;
      this.getPlanetas(data.Nombre);
      this.lodding.stopLoding();
    });
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getPlanetas(planeta: string) {
    this.dataService.getRazas().subscribe(data => {
      this.razas = data.filter(
        (datos: { Planeta_Origen: string; }) => datos.Planeta_Origen === planeta);
      this.getPersonajes(this.razas['0'].Nombre_Raza);
    });
  }

  getPersonajes(raza: string) {
    this.dataService.getPersonajes().subscribe(data => {
      this.personajes = data.filter(
        (datos: { Raza: string; }) => datos.Raza === raza);
    });
  }
}
