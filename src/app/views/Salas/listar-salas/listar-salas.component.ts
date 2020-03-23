import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from 'src/app/models/sala.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit {

  public listaSalas: Sala[];

  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {

    this.httpClient.get(`${environment.url_base_api}/api/Salas`)
      .subscribe(t => {
        this.listaSalas = t;

        console.log(this.listaSalas);
      });

  }

}
