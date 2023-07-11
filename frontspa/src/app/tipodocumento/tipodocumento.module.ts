import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipodocumentoComponent } from './tipodocumento.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TipodocumentoComponent],
  exports:[TipodocumentoComponent]
})
export class TipodocumentoModule { }
