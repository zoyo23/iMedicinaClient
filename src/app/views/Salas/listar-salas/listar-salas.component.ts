import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from 'src/app/models/sala.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit {

  public listaSalas: Sala[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Sala[]>(`${environment.url_base_api}/api/Salas`)
      .subscribe(t => {
        this.listaSalas = t;
      });
  }

  irParaSala(item: any) {
    console.log(item);
  }

}
