import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters/characters-list/characters.list.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { CharactersService } from './characters/characters.service';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { CharactersDetailComponent } from './characters/characters-detail/characters-detail.component';
import { StarshipsListComponent } from './starships/starships-list/starships-list.component';
import { StarshipsService } from './starships/starships.service';
import { StarshipsDetailComponent } from './starships/starships-detail/starships-detail.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';
import { PlanetsService } from './planets/planets.service';
import { PlanetsDetailComponent } from './planets/planets-detail/planets-detail.component';
import { MoviesService } from './movies/movies.service';
import { CommonService } from './common/common.service';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies/movies-list/movies.list.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersDetailComponent,
    StarshipsListComponent,
    StarshipsDetailComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,
    FooterComponent,
    MoviesListComponent,
    MoviesDetailComponent,
    AboutComponent,
    routingComponents,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharactersService, StarshipsService, PlanetsService, MoviesService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
