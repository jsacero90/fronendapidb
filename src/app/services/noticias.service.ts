import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getnoticias() {
    const NOTICIAS = 'https://newsapi.org/v2/everything?q=dragon+ball&language=es&pageSize=5';
    const headers = new HttpHeaders({
      'X-Api-Key': '01611b59302a46d2b1a87cbe7b0c2cf8',
    });
    // tslint:disable-next-line: no-string-literal
    return this.http.get(NOTICIAS, { headers }).pipe(map( data => data['articles']));
  }


}
