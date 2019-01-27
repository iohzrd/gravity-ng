import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-clip-grid',
  templateUrl: './clip-grid.component.html',
  styleUrls: ['./clip-grid.component.scss']
})
export class ClipGridComponent implements OnInit {
  @Input() clips;

  constructor() {
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.clips,
      event.previousIndex,
      event.currentIndex
    );
    console.log('dropped');
  }

  ngOnInit() {
  }
}
