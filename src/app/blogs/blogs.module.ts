import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import { Blog, compareBlogs} from './model/blog';

import {compareLessons, Lesson} from './model/lesson';
import {LessonEntityService} from './services/lesson-entity.service';
import { BlogsResolver } from './services/blogs.resolver';
import { BlogComponent } from './blog/blog.component';
import { BlogsCardListComponent } from './blogs-card-list/blogs-card-list.component';
import { EditBlogDialogComponent } from './edit-blog-dialog/edit-blog-dialog.component';
import { BlogsHttpService } from './services/blogs-http.service';
import { BlogEntityService } from './services/blog-entity.service';
import { blogsDataService } from './services/blogs-data.service';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

export const blogsRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            blogs: BlogsResolver
        }
    },
    {
        path: ':blogUrl',
        component: BlogComponent,
        resolve: {
            blogs: BlogsResolver
        }
    }
];

const entityMetadata: EntityMetadataMap = {
    Blog: {
        sortComparer: compareBlogs,
        entityDispatcherOptions: {
            optimisticUpdate: true
        }
    },
    Lesson: {
        sortComparer: compareLessons
    }
};


@NgModule({
    imports: [
    CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(blogsRoutes),
        TabViewModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        SelectButtonModule,
        ToggleButtonModule,
        InputTextareaModule,
        TableModule
    ],
    declarations: [
        HomeComponent,
        BlogsCardListComponent,
        EditBlogDialogComponent,
        BlogComponent
    ],
    exports: [
        HomeComponent,
        BlogsCardListComponent,
        EditBlogDialogComponent,
        BlogComponent
    ],
    providers: [
        BlogsHttpService,
        BlogEntityService,
        LessonEntityService,
        BlogsResolver,
        blogsDataService
    ]
})
export class BlogModule {

    constructor(
        private eds: EntityDefinitionService,
        private entityDataService: EntityDataService,
        private blogDataService: blogsDataService) {

        eds.registerMetadataMap(entityMetadata);

        entityDataService.registerService('Blog', blogDataService);

    }


}
