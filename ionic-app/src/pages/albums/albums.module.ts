import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsPage } from './albums';

@NgModule({
  declarations: [
    AlbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumsPage),
  ],
})
export class AlbumsPageModule {}
