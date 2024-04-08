import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Blog } from '../model/blog';
import { BlogsHttpService } from '../services/blogs-http.service';

@Component({
    selector: '[blog-dialog]',
    templateUrl: './edit-blog-dialog.component.html',
    styleUrls: ['./edit-blog-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBlogDialogComponent implements OnChanges {
    @Input() state: any
    @Input() blog: Blog 


    form  = new FormGroup( {
        description: new FormControl('',[Validators.required]),
        category: new FormControl('',[Validators.required]),
        longDescription: new FormControl('',[Validators.required]),
        promo: new FormControl<boolean>(false),
        url:  new FormControl('',[Validators.required]),
        iconUrl: new FormControl('',[Validators.required]),
    });;

    dialogTitle: string;

    @Input() mode: 'create' | 'update';

    loading$: Observable<boolean>;
    visible: boolean = false;

    @Output() closeModel: EventEmitter<any> = new EventEmitter<any>(null)

    stateOptions: any[] = [
        { label: 'BEGINNER', value: 'BEGINNER' },
        { label: 'INTERMEDIATE', value: 'INTERMEDIATE' },
        { label: 'ADVANCED', value: 'ADVANCED' }

    ];

    constructor(
        private blogsService: BlogsHttpService) {
    }

    ngOnChanges(): void {        
        if(this.blog && this.mode == 'update') {
            this.form.patchValue({
                'category':this.blog.category,
                'description':this.blog.description,
                'longDescription':this.blog.longDescription,
                'url':this.blog.url,
                'iconUrl':this.blog.iconUrl,
                'promo':this.blog.promo,



            })
        }
    }
    onClose() {
    }

    onSave() {
        const blog: Blog = {
            ...this.blog,
            ...this.form.value
          };
      
          this.blogsService.saveBlog(blog.id, blog)
            .subscribe({
                next:() => {
                    this.close('called')
                }
            })

    }
    close(state?) {
        this.closeModel.emit(state)
    }

}
