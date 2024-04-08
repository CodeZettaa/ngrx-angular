import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
    {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogModule)
        },
    {
        path: '**',
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {}),
        HttpClientModule,
        SidebarModule,
        ButtonModule,
        AuthModule.forRoot(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
