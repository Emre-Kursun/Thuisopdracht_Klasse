import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { VragenComponent } from './vragen/vragen.component';


const routes: Routes = [
  {path: '', redirectTo:'vragen', pathMatch:"full"},
  
  {path: "vragen", component:VragenComponent},

  {path: "resultaat", component: ResultaatComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
