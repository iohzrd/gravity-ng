import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { ClipComponent, } from './clip/clip.component';
import { ClipSettingsComponent, ClipSettingsDialogComponent } from './clip/clip-settings/clip-settings.component';
import { ImportClipComponent, ImportClipSheetComponent } from './import-clip/import-clip.component';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    ClipComponent,
    ClipSettingsComponent,
    ClipSettingsDialogComponent,
    ImportClipComponent,
    ImportClipSheetComponent,
  ],
  entryComponents: [
    ClipSettingsComponent,
    ClipSettingsDialogComponent,
    ImportClipComponent,
    ImportClipSheetComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    NgxElectronModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
