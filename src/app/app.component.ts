import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
   
  `,
  styleUrls: ['./app.component.css'],
  /*
   The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent.
   The AppComponent can use that service to get heroes and so can every child component of its component tree.
   */
  providers: [HeroService]
})

export class AppComponent implements OnInit
{
  ngOnInit(): void {
    this.getHeroes();
  }


  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}

