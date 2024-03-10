import { TransaccionesService } from './transacciones.service';
import { Transaccion } from './transaccion';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html'
})
export class TransaccionesClientesComponent implements OnInit {

  transacciones!: Transaccion[];

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit() {
    this.transaccionesService.getTransacciones().subscribe(
      (transacciones:any) => this.transacciones = transacciones
    );
  }

}
