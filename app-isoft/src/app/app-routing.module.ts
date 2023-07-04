import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DescargasComponent } from './descargas/descargas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: DescargasComponent},
  {path: 'descargas', component: DescargasComponent, children:[{path: 'progress', component: ProgressBarComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
