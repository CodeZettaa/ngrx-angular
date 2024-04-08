import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Lesson} from '../model/lesson';
import {concatMap, delay, filter, first, map, shareReplay, tap, withLatestFrom} from 'rxjs/operators';
import {LessonEntityService} from '../services/lesson-entity.service';
import { Blog } from '../model/blog';
import { BlogEntityService } from '../services/blog-entity.service';


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
        private blogsService: BlogEntityService,
        private lessonsService: LessonEntityService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {

        const blogUrl = this.route.snapshot.paramMap.get('blogUrl');

        this.blog$ = this.blogsService.entities$
            .pipe(
                map(blogs => blogs.find(blog => blog.url == blogUrl))
            );

        this.lessons$ = this.lessonsService.entities$
            .pipe(
                withLatestFrom(this.blog$),
                tap(([lessons, blog]) => {
                    if (this.nextPage == 0) {
                        this.loadLessonsPage(blog);
                    }
                }),
                map(([lessons, blog]) =>
                    lessons.filter(lesson => lesson.blogId == blog.id))
            );

        this.loading$ = this.lessonsService.loading$.pipe(delay(0));

    }

    loadLessonsPage(blog: Blog) {
        this.lessonsService.getWithQuery({
            'blogId': blog.id.toString(),
            'pageNumber': this.nextPage.toString(),
            'pageSize': '3'
        });

        this.nextPage += 1;

    }

}
