import { NoticiasService } from './../../services/noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pnoticias',
  templateUrl: './pnoticias.component.html',
  styleUrls: ['./pnoticias.component.scss']
})
export class PnoticiasComponent implements OnInit {

  dataNoticias: any;

  constructor(private noticias: NoticiasService ) { }

  ngOnInit() {
    this.getNoticias();
   }

  getNoticias() {
    this.noticias.getnoticias().subscribe(data => this.dataNoticias = data);
  }

}
