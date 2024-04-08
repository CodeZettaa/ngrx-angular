import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Blog} from '../model/blog';
import {Observable} from 'rxjs';
// import { MatDialog } from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import { BlogEntityService } from '../services/blog-entity.service';
import { EditBlogDialogComponent } from '../edit-blog-dialog/edit-blog-dialog.component';


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

    constructor(
      private blogsService: BlogEntityService) {

    }

    ngOnInit() {
      this.reload();
    }

  reload() {

    this.beginnerBlog$ = this.blogsService.entities$
      .pipe(
        map(blogs => blogs.filter(blog => blog.category == 'BEGINNER'))
      );

    this.advancedBlog$ = this.blogsService.entities$
      .pipe(
        map(blogs => blogs.filter(blog => blog.category == 'ADVANCED'))
      );

    this.promoTotal$ = this.blogsService.entities$
        .pipe(
            map(blogs => blogs.filter(blog => blog.promo).length)
        );

  }

  onAddBlog() {

    this.toggleAddBlog = true

  }


}
