import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  public listaClientes: Cliente[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get(`${environment.url_base_api}/api/Clientes`)
      .subscribe(t => {
        this.listaClientes = t;

        console.log(this.listaClientes);
      });

  }

}
