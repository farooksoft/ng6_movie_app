import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { TextSlicerPipe } from './shared/text-slicer.pipe';
import { MovieFilterPipe } from './shared/movie-filter.pipe';
import {MovieDataService} from '../app/services/movie-data.service';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {AuthGuardService} from '../app/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    TextSlicerPipe,
    MovieFilterPipe,
    LoginComponent,
    RegisterComponent,
    MoviedetailsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [MovieDataService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
