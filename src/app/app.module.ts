import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './servicios/heroes.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroTarjetaComponent } from './components/hero-tarjeta/hero-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    BuscadorComponent,
    HeroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
