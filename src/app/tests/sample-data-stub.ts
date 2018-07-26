import { Subject } from 'rxjs/Subject';
import {MovieData} from '../data/movie-data';
import { Observable } from 'rxjs/Observable';

export class SampleDataStub {
    movies:any=[];
    constructor(){
        let movieData=new MovieData();
        this.movies=movieData.movies;
    }
    public getMovies(){
        return new Observable<any>(this.movies);
    }
}
