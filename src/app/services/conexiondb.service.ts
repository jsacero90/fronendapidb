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
    return this.getQuery('api/episodios');
  }
  /*getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }*/

  getPersonajes() {
    return this.getQuery('api/personajes').pipe(
      // tslint:disable-next-line: no-string-literal
      map(datos => datos['data']));
  }
}
