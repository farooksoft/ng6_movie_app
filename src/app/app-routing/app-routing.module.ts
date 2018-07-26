import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router, Routes} from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { RegisterComponent } from '../components/register/register.component';
import { MoviedetailsComponent } from '../components/moviedetails/moviedetails.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import {AuthGuardService} from '../services/auth-guard.service';

const routes:Routes=[
  {path:'login', component:LoginComponent},
  {path:'movies', component:MovieListComponent,canActivate:[AuthGuardService],
    children:[
      {path:':id',component:MoviedetailsComponent}
    ]
  },
  {path:'movie/:id', component:MoviedetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**',component:ErrorPageComponent}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
