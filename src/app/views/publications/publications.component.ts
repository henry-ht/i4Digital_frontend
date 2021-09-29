import { NotificationService } from './../../core/services/notification.service';
import { RequestsService } from './../../core/services/request.service';
import { Component, OnInit } from '@angular/core';
import { faEdit, faPaperPlane, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;
  faPaperPlane  = faPaperPlane;
  posts:any = [];
  users:any = [];
  loadPage:boolean = false;
  textSearch:string = '';
  orderBy:boolean = true;
  closeResult = '';
  modalReference!:NgbModalRef;
  postForm:FormGroup;
  constructor(private http:RequestsService, private modalService:NgbModal, private fb:FormBuilder, private noti:NotificationService) {
    this.postForm = this.fb.group({
      id: [''],
      userId: [''],
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]],
      body: ['', [
        Validators.minLength(3),
        Validators.maxLength(1000),
      ]],
    });

    this.postForm.controls['userId'].setValue(1);
  }

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }

  getPosts(){
    this.loadPage = true;
    this.http.get('posts')
    .subscribe((data:any)=>{
      this.posts = data;
    },(error:any)=>{},()=>{
      this.loadPage = false;
    })
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

  open(idModal:any) {
    this.modalReference = this.modalService.open(idModal, {
      windowClass: 'app-modal-base'
    });
    this.modalReference.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addToEdit(data:any){
    this.postForm.patchValue(data);
  }

  deleteItem(id:number, index:number){
    this.http.delete("posts/"+id)
    .subscribe((data:any)=>{
        // this.getPosts();
        this.posts.splice(index, 1);
        this.noti.success('Deleted item');
    },(error:any)=>{
      this.noti.success('Action not performed');
    },()=>{
      this.loadPage = false;
    });
  }

  clearForm(){
    this.postForm.reset();
  }

  isValid() {
    return this.postForm.controls;
  }

  onSubmit(){
    console.log('hola: ', this.postForm.value)
    if(!this.postForm.invalid){
      if(this.postForm.controls['id'].value){
        this.edit();
      }else{
        this.save();
      }
    }
  }

  private save(){
    this.loadPage = true;
    let send = this.postForm.value;

    for (let prop in send) {
      if (!send[prop] && prop) {
        delete send[prop];
      }
    }

    this.http.save("posts", send)
    .subscribe((data:any)=>{
      if(data.id){
        this.getPosts();
        this.clearForm();
        this.noti.success('Post saved');
        this.modalClose();
      }
    },(error:any)=>{
      this.noti.success('Action not performed');
    },()=>{
      this.loadPage = false;
    });
  }

  private edit(){
    this.loadPage = true;
    let send      = this.postForm.value;

    for (let prop in send) {
      if (!send[prop]) {
        delete send[prop];
      }
    }

    this.http.put("posts/"+send.id, send)
    .subscribe((data:any)=>{
      if(data.id){
        this.getPosts();
        this.clearForm();
        this.noti.success('Edited');
        this.modalClose();
      }
    },(error:any)=>{
      this.noti.success('Action not performed');
    },()=>{
      this.loadPage = false;
    });
  }

  private modalClose():void{
    this.modalReference.close();
  }

}
