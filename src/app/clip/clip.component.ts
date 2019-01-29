import { Component, OnInit, Input } from '@angular/core';

export interface ClipInterface {
  name: string;
  path: string;
  rate: number;
  uid: string;
  volume: number;
}

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {
  @Input() clip: ClipInterface;
  // progress bar
  color = 'secondary';
  mode = 'determinate';
  value = 0;

  constructor() { }

  playPause(uid) {
    const element: any = document.getElementById(`audio-${uid}`);
    if (element.paused) {
      element.play();
    } else {
      element.pause();
    }
  }

  reset(uid) {
    const element: any = document.getElementById(`audio-${uid}`);
    element.pause();
    element.currentTime = 0;
  }

  updateProgress(uid) {
    const audio_element: any = document.getElementById(`audio-${uid}`);
    const percent = Math.floor((audio_element.currentTime / audio_element.duration) * 100);
    if (percent === 100) {
      this.value = 0;
    } else {
      this.value = percent;
    }
  }

  ngOnInit() {

  }
}
