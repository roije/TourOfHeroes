/**
 * Created by roije on 10/10/2016.
 */
import {Injectable} from '@angular/core'
import {HEROES} from './mock-heroes';
import {Hero} from "./hero";

@Injectable()
export class HeroService{

  getHeroes(): Hero[]{
    return HEROES;
  }
}
