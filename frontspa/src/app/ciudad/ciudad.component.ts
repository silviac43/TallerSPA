import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';
import { CiudadService } from './ciudad.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  ciudades:Array<Ciudad>=[];

  constructor(private ciudadService: CiudadService) { }

  getCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }
  ngOnInit() {
    this.getCiudades();
  }

}
