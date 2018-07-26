import { Injectable } from '@angular/core';
import {MovieData} from '../data/movie-data';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class MovieDataService {

  movieTitle=new Subject<string>();
  sharedVar:string;
  apiUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1";
  detailsUrl="https://api.themoviedb.org/3/movie/";
  key="?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US";
  private movies=[];
  isAuthenticated:boolean=false;

  constructor(private http:Http) {
    // let data=new MovieData();
    // this.movies=data.movies;

   }

   login(userId:string,password:string){
    if(userId=="farooksoft@gmail.com" && password=="admin123"){
      this.isAuthenticated=true;
    }
    else
    {
      this.isAuthenticated=false;
    }
   }


   getMovies(){
    //return this.movies;
    return this.http.get(this.apiUrl).map(res=>{console.log("Status:",res.status); return res.json().results;});
   }

   getMovieDetails(movieid:number){
    let url=this.detailsUrl+movieid+this.key;
    return this.http.get(url).map(r=>r.json());
   }

   addMovie(movie:any){
     return this.http.post("http://localhost:3000/myMovies",movie).map(res=>{console.log("Status:",res.status); return res.json();});
   }


}
