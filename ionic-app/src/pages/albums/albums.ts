import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {

  albums = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams, private http:HttpClient) {
  }

  ionViewDidLoad() {
     this.http.get<any>('http://192.168.0.102:8000/api/albums')
    //this.http.get<any>('http://localhost:8000/api/albums')
        .subscribe(data => this.albums = data);
  }

}
