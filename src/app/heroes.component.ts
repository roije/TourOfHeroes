import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit
{
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

