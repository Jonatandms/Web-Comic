import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent  {
  
  heroes:any[] = [];
  termino:string;

  constructor(private activateRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router) {


   }

  ngOnInit(){

    this.activateRoute.params.subscribe( params=>{
      this.termino= params['termino'];
      this.heroes = this._heroesService.buscarhroes(params['termino']);
      console.log(this.heroes);
    });

  }

  verHeroe(idx:number){
    this.router.navigate(['/hero',idx])
  }

}
