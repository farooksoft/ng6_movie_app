import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MovieDataService} from '../../services/movie-data.service';

//Step-1 import Output, EventEmitter
@Component({
  selector: 'movie-card',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input("currentMovie") movie;
  @Output() onSelect=new EventEmitter<any>(); //step-2

  constructor(private moviesvc:MovieDataService) { }

  ngOnInit() {
  }

  movieClick(data:any){
   // this.onSelect.emit(title); //step-3
    this.moviesvc.sharedVar=data.title;
    console.log("SVC",this.moviesvc.sharedVar);
  }

  updateSubject(title:string){
    this.moviesvc.movieTitle.next(title);
  }

  addMovie(movie:any){
    this.moviesvc.addMovie(movie).subscribe(res=>console.log(res));
  }
}
