import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {Blog} from '../model/blog';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class blogsDataService extends DefaultDataService<Blog> {


    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('blog', http, httpUrlGenerator);

    }

    getAll(): Observable<Blog[]> {
        return this.http.get('/api/blogs')
            .pipe(
                map(res => res["payload"])
            );
    }

}
