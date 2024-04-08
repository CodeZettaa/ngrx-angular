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

    currentBlog:Blog

    @Output()
    blogChanged = new EventEmitter();

    toggleAddBlog:boolean = false
    constructor(
      ) {
    }

    ngOnInit() {

    }

    editblog(blog:Blog) {
      this.currentBlog= blog
      this.toggleAddBlog = !this.toggleAddBlog

    }

  onDeleteblog(blog:Blog) {

  }


  close(isCalled?) {    
    if(isCalled) {
      this.blogChanged.emit()
    }
    this.toggleAddBlog = false
  }
}









