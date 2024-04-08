import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Blog} from '../model/blog';


@Injectable()
export class BlogEntityService
    extends EntityCollectionServiceBase<Blog> {

    constructor(
        serviceElementsFactory:
            EntityCollectionServiceElementsFactory) {

        super('Blog', serviceElementsFactory);

    }

}

