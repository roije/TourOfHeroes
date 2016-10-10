import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        //Will be the standard path when app opens.
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        //The colon (:) in the path indicates that :id is a placeholder to be filled with
        // a specific hero id when navigating to the HeroDetailComponent
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule { }
