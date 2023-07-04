import { PersonaService } from './../persona-service';
import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [
  ]
})
export class PersonasComponent implements OnInit {
  personas: Persona[] =[];
  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonas()
    .subscribe({

      next: (listaPersonasRemote)=>{
        let personasRemote =  listaPersonasRemote  as Persona[];
        this.personas = personasRemote
        this.personaService.setPersonas(this.personas);
        console.log("Personas Obtenidas subscriber " + this.personas);
      }
    }

    );
  }

  irAgregar(){
    console.log("Vamos a agregar");
    this.router.navigate(['./personas/agregar'])
  }

}
