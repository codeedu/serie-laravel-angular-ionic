import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AlbumListComponent} from './album-list/album-list.component';
import {AlbumCreateComponent} from './album-create/album-create.component';
import {PhotoCreateComponent} from './photo-create/photo-create.component';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {path: 'albums', component: AlbumListComponent},
    {path: 'albums/create', component: AlbumCreateComponent},
    {path: 'albums/:album/photos/create', component: PhotoCreateComponent},
]


@NgModule({
    declarations: [
        AppComponent,
        AlbumListComponent,
        AlbumCreateComponent,
        PhotoCreateComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
