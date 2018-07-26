import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Array<any>, rating?: number): any {

    let filteredMovies=movies.filter(m=>m.vote_average>=rating);
    return filteredMovies;
  }
}
