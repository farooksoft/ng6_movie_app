import { Component, OnInit } from '@angular/core';
import {MovieData} from '../../data/movie-data';
import {MovieDataService} from '../../services/movie-data.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies=[];
  rating=0;
  constructor(private svc:MovieDataService) {
    this.svc.getMovies().subscribe(res=>this.movies=res);
   }

  ngOnInit() {
    this.svc.movieTitle.subscribe(r=>alert(r));
  }

  movieClick(movieid:number){
    //alert(`You clicked ${movieid}`);
    alert(this.svc.sharedVar);
  }

  getChildInfo(data:any){
    //alert(`You selected: ${data.title}`);
    alert(this.svc.sharedVar);
  }

  getInfo(){
    alert(this.svc.sharedVar);
  }
}
