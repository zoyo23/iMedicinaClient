import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  clienteForm = new FormGroup({
    nomeCliente: new FormControl(''),
    cpfCliente: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    var modeloCliente = new Cliente(
      '',
      this.clienteForm.value.cpfCliente,
      this.clienteForm.value.nomeCliente,
    )

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    console.log(modeloCliente);
    delete modeloCliente.Id;
    console.log(modeloCliente);

    this.httpClient.post(`${environment.url_base_api}/api/Clientes`, modeloCliente, { headers: headers })
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listaClientes']);
      });

  }

}
