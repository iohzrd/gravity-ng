import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { AddClipComponent } from './add-clip/add-clip.component';
import { ClipComponent, ClipInterface } from './clip/clip.component';
import { ClipDetailsComponent } from './clip-details/clip-details.component';
import { ClipGridComponent } from './clip-grid/clip-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clips: ClipInterface[] = [
    { name: 'placeholder', path: 'placeholder', rate: 1, uid: 'placeholder', volume: 1 },
  ];
  title = 'gravity';
  versions = { node: '', chrome: '', electron: '' };

  constructor(private _electronService: ElectronService) {
    if (this._electronService.isElectronApp) {
      this.versions.node = this._electronService.process.versions.node;
      this.versions.chrome = this._electronService.process.versions.chrome;
      this.versions.electron = this._electronService.process.versions.electron;
    }

    this._electronService.ipcRenderer.on('config', (event, configRoot) => {
      console.log(configRoot.clips);
      this.clips = configRoot.clips;
    });
  }
}
