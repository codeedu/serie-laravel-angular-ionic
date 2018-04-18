import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  name = '';

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  create(){
    this.http.post('http://localhost:8000/api/albums', {name: this.name})
        .subscribe(data => this.router.navigate(['albums']));
  }

}
