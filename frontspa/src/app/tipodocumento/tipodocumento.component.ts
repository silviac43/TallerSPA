import { Component, OnInit } from '@angular/core';
import { Tipodocumento } from './tipodocumento';
import { TipodocumentoService } from './tipodocumento.service';

@Component({
  selector: 'app-tipodocumento',
  templateUrl: './tipodocumento.component.html',
  styleUrls: ['./tipodocumento.component.css']
})
export class TipodocumentoComponent implements OnInit {

  tipodocumentos:Array<Tipodocumento>=[];

  constructor(private tipodocumentoService: TipodocumentoService) { }

  getTipodocumentos() {
    this.tipodocumentoService.getTipodocumentos().subscribe(tipodocumentos => {
      this.tipodocumentos = tipodocumentos;
    });
  }
  ngOnInit() {
    this.getTipodocumentos();
  }
}
