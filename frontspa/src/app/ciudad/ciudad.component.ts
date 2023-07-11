import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';
import { CiudadService } from './ciudad.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  ciudades:Array<Ciudad>=[];
  ciudadForm! : FormGroup;
  selectedCiudad!: Ciudad;

  constructor(private ciudadService: CiudadService, private formBuilder: FormBuilder) { }

  getCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }
  ngOnInit() {
    this.getCiudades();

    this.ciudadForm = this.formBuilder.group({
      nombre: [""],
      descripcion: [""],
    })
  }

  formularioCrear() {
    this.ciudadForm = this.formBuilder.group({
      nombre: [""],
      descripcion: [""],
    })
  }

  formularioEditar(ciudad: Ciudad) {
    this.selectedCiudad=ciudad
    this.ciudadForm = this.formBuilder.group({
      nombre: [ciudad.nombre],
      descripcion: [ciudad.descripcion],
    })
  }

  createCiudad(ciudad: Ciudad) {
    this.ciudadService.createCiudad(ciudad).subscribe(ciudad =>{
      this.ciudadForm.reset();
      this.getCiudades()
    })
  }

  deleteCiudad(ciudad: Ciudad) {
    this.ciudadService.deleteCiudad(ciudad.id).subscribe(response => {
      this.ciudades = this.ciudades.filter(item => item.id != ciudad.id);
    })
  }

  updateCiudad(ciudad: Ciudad) {
    this.ciudadService.updateCiudad(this.selectedCiudad.id, ciudad).subscribe(ciudad =>{
      this.selectedCiudad = ciudad;
      this.getCiudades();
    })
  }

}
