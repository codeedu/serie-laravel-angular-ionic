import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  photos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    const albumId = this.navParams.get('album');
      //this.http.get<any>(`http://localhost:8000/api/albums/${albumId}/photos`)
    this.http.get<any>(`http://192.168.0.102:8000/api/albums/${albumId}/photos`)
        .subscribe(data => {
          console.log(data);
          this.photos = data.data
        })
  }

}
