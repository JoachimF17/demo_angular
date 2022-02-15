import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureFormatPipe } from './pipes/voiture-format.pipe';
import { ChronoPipe } from './pipes/chrono.pipe';

@NgModule({
  declarations: [ VoitureFormatPipe, ChronoPipe ],
  imports: [
    CommonModule
  ],
  exports: [ VoitureFormatPipe, ChronoPipe ]
})
export class SharedModule { }
