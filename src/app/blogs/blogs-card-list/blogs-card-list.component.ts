import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Blog } from '../model/blog';
import { EditBlogDialogComponent } from '../edit-blog-dialog/edit-blog-dialog.component';

@Component({
    selector: 'blogs-card-list',
    templateUrl: './blogs-card-list.component.html',
    styleUrls: ['./blogs-card-list.component.scss']
})
export class BlogsCardListComponent implements OnInit {

    @Input()
    blogs: Blog[];

    @Output()
    blogChanged = new EventEmitter();

    constructor(
      ) {
    }

    ngOnInit() {

    }

    editblog(blog:Blog) {


    }

  onDeleteblog(blog:Blog) {

  }

}









