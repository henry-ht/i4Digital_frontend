import { RequestsService } from './../../core/services/request.service';
import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  faSort = faSort;
  albums:any = [];
  loadPage:boolean = false;
  textSearch:string = '';
  orderBy:boolean = true;
  constructor(private http:RequestsService) {

  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loadPage = true;
    this.http.get('albums')
    .subscribe((data:any)=>{
      this.albums = data;
    },(error:any)=>{},()=>{
      this.loadPage = false;
    })
  }

}
