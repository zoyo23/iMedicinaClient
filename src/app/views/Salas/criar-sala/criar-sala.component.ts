import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sala } from 'src/app/models/sala.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {

  salaConferenciaForm = new FormGroup({
    idCliente: new FormControl(''),
    idMedico: new FormControl(''),
    dataConsulta: new FormControl('')
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var modeloSala = new Sala(
      this.salaConferenciaForm.value.idCliente,
      this.salaConferenciaForm.value.idMedico,
      this.salaConferenciaForm.value.dataConsulta,
      '',
      '',
      '',
      ''
    );

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    console.log(modeloSala);

    this.httpClient.post(`${environment.url_base_api}/api/Salas`, modeloSala, { headers: headers })
      .subscribe(res => console.log(res));
  }

}
