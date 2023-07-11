import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadComponent } from './ciudad.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CiudadComponent],
  exports:[CiudadComponent]
})
export class CiudadModule { }
