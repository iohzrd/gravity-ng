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

  playPause(uid) {
    const element: any = document.getElementById(`audio-${uid}`);
    if (element.paused) {
      element.play();
    } else {
      element.pause();
    }
  }

  constructor() { }

  ngOnInit() {

  }



}
