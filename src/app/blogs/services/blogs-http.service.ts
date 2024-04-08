

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/blog";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class BlogsHttpService {

    constructor(private http:HttpClient) {

    }

    findAllBlogs(): Observable<Blog[]> {
        return this.http.get('/api/blogs')
            .pipe(
                map(res => res['payload'])
            );
    }

    findBlogByUrl(blogUrl: string): Observable<Blog> {
      return this.http.get<Blog>(`/api/blogs/${blogUrl}`);
    }

    findLessons(
        blogId:number,
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get<Lesson[]>('/api/lessons', {
            params: new HttpParams()
                .set('blogId', blogId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }


    saveBlog(blogId: string | number, changes: Partial<Blog>) {
        return this.http.put('/api/blog/' + blogId, changes);
    }


}
