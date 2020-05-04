import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexiondbService {
  getIds(url: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }



getQuery(query: string) {
  const ENDPOINT = `https://apifansdb.azurewebsites.net/${query}`;

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.http.get(ENDPOINT, { headers });
}

  getEpisodios() {
    return this.getQuery('api/episodios');
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
  }

  getEstados() {
    return this.getQuery('api/estados').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }





