import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Blog } from '../model/blog';
import { BlogsHttpService } from '../services/blogs-http.service';

@Component({
    selector: '[blog-dialog]',
    templateUrl: './edit-blog-dialog.component.html',
    styleUrls: ['./edit-blog-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBlogDialogComponent {
    @Input() state: boolean

    form  = new FormGroup( {
        description: new FormControl('',[Validators.required]),
        category: new FormControl('',[Validators.required]),
        longDescription: new FormControl('',[Validators.required]),
        promo: new FormControl<boolean>(false),
        url:  new FormControl('',[Validators.required]),
        iconUrl: new FormControl('',[Validators.required]),
    });;

    dialogTitle: string;

    blog: Blog;

    @Input() mode: 'create' | 'update';

    loading$: Observable<boolean>;
    visible: boolean = false;

    stateOptions: any[] = [
        { label: 'BEGINNER', value: 'BEGINNER' },
        { label: 'INTERMEDIATE', value: 'INTERMEDIATE' },
        { label: 'ADVANCED', value: 'ADVANCED' }

    ];

    constructor(
        private fb: UntypedFormBuilder,

        private blogsService: BlogsHttpService) {
    }

    onClose() {
    }

    onSave() {

        const blog: Blog = {
            ...this.blog,
            ...this.form.value
          };
      
          this.blogsService.saveBlog(blog.id, blog)
            .subscribe()
      


    }


}
