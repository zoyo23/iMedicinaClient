import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'src/vendor/jitsi/external_api.js';
import { environment } from 'src/environments/environment';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: "3fa85f6457174562b3fc2c963f66afa6",
      width: 700,
      height: 700,
      parentNode: document.querySelector('#meet')
    }

    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
