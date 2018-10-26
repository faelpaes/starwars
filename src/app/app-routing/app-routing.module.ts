import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersListComponent } from '../characters/characters-list/characters.list.component';
import { CharactersDetailComponent } from '../characters/characters-detail/characters-detail.component';
import { StarshipsListComponent } from '../starships/starships-list/starships-list.component';
import { StarshipsDetailComponent } from '../starships/starships-detail/starships-detail.component';
import { PlanetsListComponent } from '../planets/planets-list/planets-list.component';
import { PlanetsDetailComponent } from '../planets/planets-detail/planets-detail.component';
import { MoviesListComponent } from '../movies/movies-list/movies.list.component';
import { MoviesDetailComponent } from '../movies/movies-detail/movies-detail.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersListComponent },
  { path: 'characters/:id', component: CharactersDetailComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starships/:id', component: StarshipsDetailComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'planets/:id', component: PlanetsDetailComponent },
  { path: 'films', component: MoviesListComponent },
  { path: 'films/:id', component: MoviesDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents =
  [
    CharactersListComponent,
    CharactersDetailComponent,
    StarshipsListComponent,
    StarshipsDetailComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,
    MoviesListComponent
  ];

