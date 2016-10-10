/**
 * Created by roije on 09/10/2016.
 */
import {Component, Input, OnInit} from '@angular/core'
import {Hero} from "./hero";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

@Component({
  //Meta data:
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

  hero: Hero;

  ngOnInit(): void{
    this.route.params.forEach((params: Params) =>
    {
      //The hero id is a number. Route parameters are always strings.
      // So we convert the route parameter value to a number with the JavaScript (+) operator.
      let id = +params['id'];
      this.hero = this.heroService.getHero(id);
    });
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  goBack(): void {
    this.location.back();
  }
}
