import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomesComponent } from './homes/homes.component';


const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Home', component: HomesComponent}, 
  { path: 'Services', component: ServiceComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
