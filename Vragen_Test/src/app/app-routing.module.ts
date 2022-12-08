import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VragenComponent } from './vragen/vragen.component';


const routes: Routes = [
  {path: '', redirectTo:'vragen', pathMatch:"full"},
  {path: "vragen", component:VragenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
