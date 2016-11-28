import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [HeroService]
})
export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private HeroService: HeroService) {}

    ngOnInit(): void {
        this.HeroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

}