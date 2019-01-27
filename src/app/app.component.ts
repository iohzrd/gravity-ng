import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { ClipInterface } from './clip/clip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clips: ClipInterface[] = [
    // { name: 'placeholder', path: 'placeholder', rate: 1, uid: 'placeholder', volume: 1 },
  ];
  title = 'gravity';

  constructor(private _electronService: ElectronService) {
    this._electronService.ipcRenderer.on('config', (event, configRoot) => {
      console.log(configRoot.clips);
      this.clips = configRoot.clips;
    });
  }
  // this._electronService.ipcRenderer.sendSync('saveConfigs', this.config);
}
