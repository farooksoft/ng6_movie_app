import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {MovieDataService} from '../services/movie-data.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(){
    if(this.msvc.isAuthenticated==true)
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  constructor(private msvc:MovieDataService, private router:Router) { }

}
