import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums = [];

  constructor(private http:HttpClient) { }

  //http://localhost:8000
  ngOnInit() {
    //EcmaScript 6 - Arrow function
    this.http.get<any>('http://localhost:8000/api/albums')
        .subscribe(data => this.albums = data)
  }

}