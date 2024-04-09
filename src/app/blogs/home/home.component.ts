import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Blog, compareBlogs} from '../model/blog';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { BlogsHttpService } from '../services/blogs-http.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerBlog$: Observable<Blog[]>;

    advancedBlog$: Observable<Blog[]>;

    toggleAddBlog:boolean = false
    loading$: Observable<boolean>;

    constructor(
      private blogsService: BlogsHttpService) {

    }

    ngOnInit() {
      this.reload();
    }

  reload() {
    const blogs$ = this.blogsService.findAllBlogs()
    .pipe(
      map(courses => courses.sort(compareBlogs)),
      shareReplay()
    );

  this.loading$ = blogs$.pipe(map(blog => !!blog));

  this.beginnerBlog$ = blogs$
    .pipe(
      map(blogs => blogs.filter(blog => blog.category == 'BEGINNER'))
    );


  this.advancedBlog$ = blogs$
    .pipe(
      map(blogs => blogs.filter(blog => blog.category == 'ADVANCED'))
    );

  this.promoTotal$ = blogs$
      .pipe(
          map(blogs => blogs.filter(blog => blog.promo).length)
      );
  

  }

  onAddBlog() {

    this.toggleAddBlog = true

  }


}
