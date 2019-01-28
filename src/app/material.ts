import { NgModule } from '@angular/core';
import {
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatToolbarModule,
    ],
    exports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
