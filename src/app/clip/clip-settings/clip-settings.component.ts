import { Component, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



export interface ClipInterface {
  name: string;
  path: string;
  rate: number;
  uid: string;
  volume: number;
}

@Component({
  selector: 'app-clip-settings',
  templateUrl: './clip-settings.component.html',
  styleUrls: ['./clip-settings.component.scss']
})
export class ClipSettingsComponent {
  clip: ClipInterface;

  constructor(public dialog: MatDialog) { }

  openClipSettings(): void {
    const dialogRef = this.dialog.open(ClipSettingsDialogComponent, {
      width: '500px',
      data: {
        name: this.clip.name, path: this.clip.path, rate: this.clip.rate,
        uid: this.clip.uid, volume: this.clip.volume
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.clip.name = result;
      // this.clip.name = result.name;
      // console.log(result.name);
      // this.clip.rate = result.rate;
      // console.log(result.rate);
      // this.clip.volume = result.volume;
      // console.log(result.volume);
    });
  }
}

@Component({
  selector: 'app-clip-settings-dialog',
  templateUrl: './clip-settings-dialog.component.html',
})
export class ClipSettingsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ClipSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClipInterface) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
