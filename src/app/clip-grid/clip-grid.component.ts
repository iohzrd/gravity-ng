import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-clip-grid',
  templateUrl: './clip-grid.component.html',
  styleUrls: ['./clip-grid.component.scss']
})
export class ClipGridComponent implements OnInit {
  @Input() clips;

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.clips,
      event.previousIndex,
      event.currentIndex
    );
  }

  constructor() {
  }

  ngOnInit() {
  }

  // ngOnChanges() {
  // }
}
