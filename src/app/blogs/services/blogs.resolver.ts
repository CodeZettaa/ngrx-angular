import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {filter, first, map, tap} from 'rxjs/operators';
import { BlogEntityService } from './blog-entity.service';


@Injectable()
export class BlogsResolver  {

    constructor(private blogsService: BlogEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {

        return this.blogsService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                       this.blogsService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}
