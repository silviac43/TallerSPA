import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas:Array<Persona>=[];
  personaForm! : FormGroup;
  selectedPersona!: Persona;
  extra1Form! : FormGroup;
  extra2Form! : FormGroup;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) { }

  getPersonas() {
    this.personaService.getPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }
  ngOnInit() {
    this.getPersonas();

    this.personaForm = this.formBuilder.group({
      nombres: [""],
      apellidos: [""],
      documento: [""],
      fecha_nacimiento: [""],
      email: [""],
      telefono: [""],
      usuario: [""],
      password: [""],
    })

    this.extra1Form = this.formBuilder.group({
      id: [""],
    })

    this.extra2Form = this.formBuilder.group({
      id: [""],
    })
  }

  formularioCrear() {
    this.personaForm = this.formBuilder.group({
      nombres: [""],
      apellidos: [""],
      documento: [""],
      fecha_nacimiento: [""],
      email: [""],
      telefono: [""],
      usuario: [""],
      password: [""],
    })
  }

  formularioExtra1(persona: Persona) {
    this.selectedPersona=persona
    this.extra1Form = this.formBuilder.group({
      id: [""],
    })
  }

  formularioExtra2(persona: Persona) {
    this.selectedPersona=persona
    this.extra2Form = this.formBuilder.group({
      id: [""],
    })
  }

  formularioEditar(persona: Persona) {
    this.selectedPersona=persona
    this.personaForm = this.formBuilder.group({
      nombres: [persona.nombres],
      apellidos: [persona.apellidos],
      documento: [persona.documento],
      fecha_nacimiento: [persona.fecha_nacimiento],
      email: [persona.email],
      telefono: [persona.telefono],
      usuario: [persona.usuario],
      password: [persona.password],
    })
  }

  createPersona(persona: Persona) {
    this.personaService.createPersona(persona).subscribe(persona =>{
      this.personaForm.reset();
      this.getPersonas()
    })
  }

  deletePersona(persona: Persona) {
    this.personaService.deletePersona(persona.id).subscribe(response => {
      this.personas = this.personas.filter(item => item.id != persona.id);
    })
  }

  updatePersona(persona: Persona) {
    this.personaService.updatePersona(this.selectedPersona.id, persona).subscribe(persona =>{
      this.getPersonas();
    })
  }

  updateLugar(extra: Extra) {
    this.personaService.updateLugar(this.selectedPersona.id, extra.id).subscribe(persona =>{
      this.getPersonas();
    })
  }

  deleteLugar(extra: Extra) {
    this.personaService.deleteLugar(this.selectedPersona.id, extra.id).subscribe(persona =>{
      this.getPersonas();
    })
  }
}

export class Extra {
  id: string;
  public constructor(id: string) {
    this.id = id;
  }
}