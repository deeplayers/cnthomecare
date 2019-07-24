import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomesComponent } from './homes/homes.component';


const routes: Routes = [
  { path: '', component: HomesComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServiceComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
