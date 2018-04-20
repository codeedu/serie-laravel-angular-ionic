import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-photo-create',
    templateUrl: './photo-create.component.html',
    styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent implements OnInit {

    name = '';
    album = null;
    file = null;
    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getAlbum(params['album'])
        })
    }

    getAlbum(albumId) {
        this.http.get(`http://localhost:8000/api/albums/${albumId}`)
            .subscribe(data => this.album = data);
    }

    handleFile(file){
        this.file = file;
    }

    upload() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('file_name',this.file);
        this.http.post(`http://localhost:8000/api/albums/${this.album.id}/photos`, formData)
            .subscribe(data => alert('Upload de fotos feito com sucesso!'));
        //formData.append('file_name', );
        //POST /albums/1/photos
    }

}
