import { LodingService } from './../../../../services/loding.service';
import { ConexiondbService } from './../../../../services/conexiondb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.scss']
})
export class RazaComponent implements OnInit {

  raza: any;
  personajes: any;
  constructor( private dataService: ConexiondbService,
               private router: ActivatedRoute,
               private lodding: LodingService ) { }

  ngOnInit() {
    this.lodding.iniciarLoding();
    this.getRaza(this.getId());
  }

  getRaza(id: string) {
    const url = `api/razas/${id}`;
    this.dataService.getIds(url).subscribe(data => {
      this.raza = data;
      this.getRazas(data.Nombre_Raza);
      this.lodding.stopLoding();
    });
  }

  getId() {
    return this.router.snapshot.paramMap.get('Id');
  }

  getRazas(raza: string) {
    this.dataService.getPersonajes().subscribe(data => {
      this.personajes = data.filter(
        (datos: { Raza: string; }) => datos.Raza === raza);
      console.log(this.personajes);
    });
  }

}
