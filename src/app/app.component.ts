import { Component, AfterViewInit } from '@angular/core';
import '../vendor/jitsi/external_api.js';
import { environment } from '../environments/environment'

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iMedicina';
  domain: string = environment.url_base_video;
  options: any;
  api: any;

  constructor() {
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
