import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Lesson} from '../model/lesson';
import {concatMap, delay, filter, first, map, shareReplay, tap, withLatestFrom} from 'rxjs/operators';
import { Blog } from '../model/blog';
import { BlogsHttpService } from '../services/blogs-http.service';


@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {

    blog$: Observable<Blog>;

    loading$: Observable<boolean>;

    lessons$: Observable<Lesson[]>;

    displayedColumns = ['seqNo', 'description', 'duration'];

    nextPage = 0;

    constructor(
        private blogServoive: BlogsHttpService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {

        const blogUrl = this.route.snapshot.paramMap.get("blogUrl");

        this.blog$ = this.blogServoive.findBlogByUrl(blogUrl);
        
        this.lessons$ = this.blog$.pipe(
            concatMap(course => this.blogServoive.findLessons(course.id)),
            tap(console.log)
          );

          this.loading$ = this.blog$.pipe(map(blog => !!blog));

    }

    loadLessonsPage(blog: Blog) {


    }

}
