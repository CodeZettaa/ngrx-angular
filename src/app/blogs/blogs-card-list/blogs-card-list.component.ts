import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Blog } from '../model/blog';
import { BlogEntityService } from '../services/blog-entity.service';
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
      private blogService: BlogEntityService) {
    }

    ngOnInit() {

    }

    editblog(blog:Blog) {

        // const dialogConfig = defaultDialogConfig();

        // dialogConfig.data = {
        //   dialogTitle:"Edit blog",
        //   blog,
        //   mode: 'update'
        // };

        // this.dialog.open(EditBlogDialogComponent, dialogConfig)
        //   .afterClosed()
        //   .subscribe(() => this.blogChanged.emit());

    }

  onDeleteblog(blog:Blog) {

        this.blogService.delete(blog)
            .subscribe(
                () => console.log("Delete completed"),
                err => console.log("Deleted failed", err)
            );


  }

}









