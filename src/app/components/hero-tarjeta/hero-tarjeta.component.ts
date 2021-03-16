import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.css']
})
export class HeroTarjetaComponent implements OnInit {
  
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private router:Router) { }

  ngOnInit(){
  }
  verHeroe(){
    console.log( this.index);
    this.router.navigate( ['/hero',this.index])
  }
}
