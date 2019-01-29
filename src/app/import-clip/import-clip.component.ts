import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
@Component({
  selector: 'app-import-clip',
  template: '<button mat-raised-button (click)="openImportClip()">Open file</button>',
  // templateUrl: './import-clip.component.html',
  styleUrls: ['./import-clip.component.scss']
})
export class ImportClipComponent {
  constructor(private bottomSheet: MatBottomSheet) { }

  openImportClip(): void {
    this.bottomSheet.open(ImportClipSheetComponent);
  }
}

@Component({
  selector: 'app-import-clip-sheet',
  templateUrl: 'import-clip-sheet.component.html',
})
export class ImportClipSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<ImportClipSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
