import { Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexiondbService {

  constructor(private http: HttpClient) { }



getQuery(query: string) {
  const ENDPOINT = `https://apifansdb.azurewebsites.net/${query}`;

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.http.get(ENDPOINT, { headers });
}

  getEpisodios() {
    return this.getQuery('api/episodios').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getPersonajes() {
    return this.getQuery('api/personajes').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getTecnicas() {
    return this.getQuery('api/tecnicas').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getEstados() {
    return this.getQuery('api/estados').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getObjetos() {
    return this.getQuery('api/objetos').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getRazas() {
    return this.getQuery('api/razas').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getPlanetas() {
    return this.getQuery('api/planetas').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }

  getIds( routes: string) {
    return this.getQuery(routes).pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos[0]));
  }

}
