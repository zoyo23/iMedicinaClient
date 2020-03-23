import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import 'src/vendor/jitsi/external_api.js';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-teleconferencia',
  templateUrl: './teleconferencia.component.html',
  styleUrls: ['./teleconferencia.component.css']
})
export class TeleconferenciaComponent implements OnInit {
  title = 'iMedicina';
  domain: string = environment.url_base_video_conferencia;
  options: any;
  api: any;

  @Input() ChaveSala: string;

  constructor(private _Activatedroute: ActivatedRoute) {
    this.ChaveSala = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.ChaveSala);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: this.ChaveSala === null ? "start_room" : this.ChaveSala,
      width: 700,
      height: 700,
      parentNode: document.querySelector('#meet')
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
