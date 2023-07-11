import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadComponent } from './ciudad.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CiudadComponent],
  exports:[CiudadComponent]
})
export class CiudadModule { }
