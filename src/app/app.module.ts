import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { ClipComponent } from './clip/clip.component';
import { ClipGridComponent } from './clip-grid/clip-grid.component';
import { MaterialModule } from './material';


@NgModule({
  declarations: [
    AppComponent,
    ClipComponent,
    ClipGridComponent,
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
