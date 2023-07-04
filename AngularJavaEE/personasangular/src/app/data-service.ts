import { Injectable } from "@angular/core";
 import { HttpClient } from '@angular/common/http';
import { Persona } from "./persona.model";

@Injectable()
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient){}

  urlBase="http://localhost:8080/personas-backend-java/webservice/personas";
  cargarPersonas(){
    return this.httpClient.get(this.urlBase);
  }

  agregarPersona(persona: Persona){
    return this.httpClient.post(this.urlBase, persona);
  }

  modificadPersona(idPersona: number, persona: Persona){
     let url : string;
     url = this.urlBase + "/" + idPersona;
     this.httpClient.put(url, persona )
      .subscribe({
        next:(p) =>{ console.log("Modificada Persona " + p) },
        error:(e) => { console.log("Error Modificando Persona " + e) }
      });
  }

  eliminarPersona(idPersona: number){
    let url : string;
    url = this.urlBase + "/" + idPersona;
    this.httpClient.delete(url)
    .subscribe({
      next:(p) =>{ console.log("Eliminada Persona " + p) },
      error:(e) => { console.log("Error Eliminando Persona " + e) }
    });
  }
}
