import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('config', (event, configRoot) => {
      this.clips = configRoot.clips;
    });
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.clips,
      event.previousIndex,
      event.currentIndex
    );
    this.electronService.ipcRenderer.send('saveConfig', { 'clips': this.clips });
  }
}
