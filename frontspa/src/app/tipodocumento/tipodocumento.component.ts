import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from './tipodocumento';
import { TipodocumentoService } from './tipodocumento.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tipodocumento',
  templateUrl: './tipodocumento.component.html',
  styleUrls: ['./tipodocumento.component.css']
})
export class TipodocumentoComponent implements OnInit {

  tipodocumentos:Array<Tipodocumento>=[];
  tipodocumentoForm! : FormGroup;
  selectedTipodocumento!: Tipodocumento;

  constructor(private tipodocumentoService: TipodocumentoService, private formBuilder: FormBuilder) { }

  getTipodocumentos() {
    this.tipodocumentoService.getTipodocumentos().subscribe(tipodocumentos => {
      this.tipodocumentos = tipodocumentos;
    });
  }
  ngOnInit() {
    this.getTipodocumentos();

    this.tipodocumentoForm = this.formBuilder.group({
      nombre: [""],
      descripcion: [""],
    })
  }

  formularioCrear() {
    this.tipodocumentoForm = this.formBuilder.group({
      nombre: [""],
      descripcion: [""],
    })
  }

  formularioEditar(tipodocumento: Tipodocumento) {
    this.selectedTipodocumento=tipodocumento
    this.tipodocumentoForm = this.formBuilder.group({
      nombre: [tipodocumento.nombre],
      descripcion: [tipodocumento.descripcion],
    })
  }

  createTipodocumento(tipodocumento: Tipodocumento) {
    this.tipodocumentoService.createTipodocumento(tipodocumento).subscribe(tipodocumento =>{
      this.tipodocumentoForm.reset();
      this.getTipodocumentos()
    })
  }

  deleteTipodocumento(tipodocumento: Tipodocumento) {
    this.tipodocumentoService.deleteTipodocumento(tipodocumento.id).subscribe(response => {
      this.tipodocumentos = this.tipodocumentos.filter(item => item.id != tipodocumento.id);
    })
  }

  updateTipodocumento(tipodocumento: Tipodocumento) {
    this.tipodocumentoService.updateTipodocumento(this.selectedTipodocumento.id, tipodocumento).subscribe(tipodocumento =>{
      this.selectedTipodocumento = tipodocumento;
      this.getTipodocumentos();
    })
  }
}
