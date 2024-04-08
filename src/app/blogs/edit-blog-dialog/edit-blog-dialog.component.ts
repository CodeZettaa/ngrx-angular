import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Blog } from '../model/blog';
import { BlogEntityService } from '../services/blog-entity.service';

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

        private blogsService: BlogEntityService) {

        // this.dialogTitle = data.dialogTitle;
        // this.blog = data.blog;
        // this.mode = data.mode;

    

        // if (this.mode == 'update') {
        //     this.form = this.fb.group(formControls);
        //     this.form.patchValue({...data.blog});
        // } else if (this.mode == 'create') {
            // this.form = this.fb.group({
            //     ...formControls,
            //     url: ['', Validators.required],
            //     iconUrl: ['', Validators.required]
            // });
        // }
    }

    onClose() {
        // this.dialogRef.close();
    }

    onSave() {

        // const blog: Blog = {
        //     ...this.blog,
        //     ...this.form.value
        // };

        // if (this.mode == 'update') {

        //     this.blogsService.update(blog);

        //     this.dialogRef.close();
        // } else if (this.mode == 'create') {

        //     this.blogsService.add(blog)
        //         .subscribe(
        //             newblog => {

        //                 console.log('New blog', newblog);

        //                 this.dialogRef.close();

        //             }
        //         );

        // }


    }


}
