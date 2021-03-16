import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent  {
  

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) {

  this.activatedRoute.params.subscribe(params =>{
    this.heroe = this._heroesService.getHero( params['id']);
    console.log(this.heroe);
  });

   }



}
