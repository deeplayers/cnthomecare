import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomesComponent } from './homes/homes.component';
import { ReactiveFormsModule,  FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Angular's preferred way to communicate with the server side is through the HttpClientModule module.
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
