import { DataService } from './data-service';
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {
  personas: Persona[]=[];
  constructor(private dataService: DataService){}
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }
  agregarPersona(persona: Persona){
    console.log("Persona: " + persona.nombre);
    this.dataService.agregarPersona(persona)
    .subscribe({
     next:(p) => {
       let persona = p as Persona;
        console.log("Se arregla al arreglo la persona recien insertada" + persona.idPersona );
        this.personas.push(persona);
      }
    });
  }

  encontrarPersona(id: number){
    const persona = this.personas.find(persona => persona.idPersona == id);
    console.log("Persona Encontrada: " + persona?.nombre);
  }

  modificarPersona(id: number, persona: Persona){
    console.log("Persona a Modificar " +persona.idPersona);
    this.dataService.modificadPersona(id, persona);
  }

  eliminarPersona(id: number){
    console.log("Eliminar persona con id: " + id);
    const index = this.personas.findIndex(persona => persona.idPersona == id);
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(id);
  }
}
