import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from  './heroes.component';
import { DashboardComponent} from './dashboard.component';
import { AppComponent } from './app.component';

@NgModule({
  imports:
  [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]) 
  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  

}
