import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargarCreditosPreAprobadosService {

  constructor(private _httpClient: HttpClient) { }

  cargarCreditos(datos) {
    return this._httpClient.post<any>(`${environment.apiUrl}/corp/creditoPreaprobados/upload/creditos/preaprobados/`,datos);
  }

  preautorizarCobro(datos){
    return this._httpClient.post<any>(`${environment.apiUrl}/corp/cobrarSupermonedas/update/${datos.id}`,datos);
  }

}
