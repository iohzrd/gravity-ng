import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElectronService } from 'ngx-electron';

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
  options: FormGroup;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ImportClipSheetComponent>,
    private electronService: ElectronService,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      disableOther: false,
    });
  }

  importFiles(event: any) {
    let files = event.srcElement.files
    console.log(files)
    for (const file in files) {
      if (files.hasOwnProperty(file)) {
        this.electronService.ipcRenderer.send('saveFiles', files[file].path);
        console.log(files[file].path)
      }
    }
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
