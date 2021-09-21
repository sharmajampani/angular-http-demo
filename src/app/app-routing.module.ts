import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcmresponsesComponent } from './pcmresponses/pcmresponses.component';
const routes: Routes = [
  {path:'pcmresponses', component: PcmresponsesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
