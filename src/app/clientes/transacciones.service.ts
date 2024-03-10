import { Transaccion } from './transaccion';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TransaccionesService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTransacciones(): Observable<Transaccion[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Transaccion[])
    );
  }

  create(transaccion: Transaccion) : Observable<Transaccion> {
    return this.http.post<Transaccion>(this.urlEndPoint, transaccion, {headers: this.httpHeaders})
  }

  getTransaccion(id:number): Observable<Transaccion>{
    return this.http.get<Transaccion>(`${this.urlEndPoint}/${id}`)
  }

  update(transaccion: Transaccion): Observable<Transaccion>{
    return this.http.put<Transaccion>(`${this.urlEndPoint}/${transaccion.id_transaccion}`, transaccion, {headers: this.httpHeaders})
  }

}
