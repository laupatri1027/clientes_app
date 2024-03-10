import { Cuenta } from './cuenta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CuentaService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCuentas(): Observable<Cuenta[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cuenta[])
    );
  }

  getCuenta(id:number): Observable<Cuenta>{
    return this.http.get<Cuenta>(`${this.urlEndPoint}/${id}`)
  }

  update(cuenta: Cuenta): Observable<Cuenta>{
    return this.http.put<Cuenta>(`${this.urlEndPoint}/${cuenta.id}`, cuenta, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cuenta>{
    return this.http.delete<Cuenta>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
