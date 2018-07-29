import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
movies: Array<object>;
oneMovie: Object;

  constructor(private movieService: MoviesService, private router: Router) {
    this.movies = movieService.getMovies();
    // this.oneMovie = movieService.getOneMovie()
  }

  ngOnInit() {
  }

  viewDetail(id) {
    this.router.navigate(['movie', id]);
  }

}
