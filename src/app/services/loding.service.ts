import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LodingService {

  constructor() { }

  iniciarLoding() {
    Swal.fire({
      text: 'Cargando Información...',
      allowOutsideClick: false
    });
    Swal.showLoading();
  }

  stopLoding() {
    Swal.close();
  }
}
