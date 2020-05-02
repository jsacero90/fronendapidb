import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
