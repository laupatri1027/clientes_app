import { CuentaService } from './cuenta.service';
import { Cuenta } from './cuenta';
import { Component, OnInit } from '@angular/core';


import swal from 'sweetalert2'

@Component({
  selector: 'app-cuentas',
  templateUrl: './clientes.component.html'
})
export class CuentasComponent implements OnInit {

  Cuentas!: Cuenta[];

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    this.cuentaService.getCuentas().subscribe(
      (cuentas:any) => this.Cuentas=this.Cuentas
    );
  }



}
