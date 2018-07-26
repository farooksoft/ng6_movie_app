import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieDataService} from '../../services/movie-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit, OnDestroy {

  movie:any;
  constructor(private route:ActivatedRoute, private svc:MovieDataService) { }
  subs:Subscription;
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      //console.log(params["id"]);
      let movieid=params["id"];
      this.subs= this.svc.getMovieDetails(movieid).subscribe(m=>{
        this.movie=m;
      });
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
