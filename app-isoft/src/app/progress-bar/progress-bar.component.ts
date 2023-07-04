import { DescargasComponent } from './../descargas/descargas.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  isCompleted: Boolean = true;

  constructor() {

   }

  ngOnInit(): void {
   this. isCompleted = false;
  }
  
}
