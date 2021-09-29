import { RequestsService } from './../../core/services/request.service';
import { Component, OnInit } from '@angular/core';
import { faSort, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  faTrash = faTrash;
  faSort = faSort;
  users:any = [];
  loadPage:boolean = false;
  textSearch:string = '';
  orderBy:boolean = true;
  constructor(private http:RequestsService) {

  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.loadPage = true;
    this.http.get('users')
    .subscribe((data:any)=>{
      this.users = data;
    },(error:any)=>{},()=>{
      this.loadPage = false;
    })
  }

  deleteItem(index:number){
    this.users.splice(index, 1);
  }

}
