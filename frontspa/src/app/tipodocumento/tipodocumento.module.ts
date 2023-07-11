import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipodocumentoComponent } from './tipodocumento.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipodocumentoComponent],
  exports:[TipodocumentoComponent]
})
export class TipodocumentoModule { }
