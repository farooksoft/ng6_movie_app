import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MovieDataService} from '../../services/movie-data.service';
import {SampleDataStub} from '../../tests/sample-data-stub';
import { Observable } from 'rxjs/Observable';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let getMovieSpy:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      imports:[RouterTestingModule, FormsModule]
    }).overrideComponent(MovieListComponent,{
      set: {
        providers: [
          { provide: MovieDataService, useClass: SampleDataStub },
        ]}
    })
    .compileComponents();
  }));

  beforeEach(() => {
   // const movieService = jasmine.createSpyObj('MovieDataService', ['getMovies']);
   // getMovieSpy = movieService.getMovies.and.returnValue(Observable.of(testQuote) );

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
