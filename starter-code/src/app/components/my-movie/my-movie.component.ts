import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  oneMovie: object;
  movieId: number;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']));

    this.oneMovie = movieService.getOneMovie(this.movieId);
  }

  ngOnInit() {
  }

}
