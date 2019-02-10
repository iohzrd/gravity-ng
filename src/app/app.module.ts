import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { FilterPipe } from './app.filter-pipe';

import { ClipComponent, } from './clip/clip.component';
import { ClipSettingsComponent, ClipSettingsDialogComponent } from './clip/clip-settings/clip-settings.component';
import { ImportClipComponent, ImportClipSheetComponent } from './import-clip/import-clip.component';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
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
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    NgxElectronModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
