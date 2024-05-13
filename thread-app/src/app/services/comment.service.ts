import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Comment from '../interface/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http :HttpClient) { }
  // http = inject(HttpClient);

  getComment(parentId:string='')
  {
    let url='http://localhost:3000/comment'
if(parentId)
  {
    url+=`?parentId=${parentId}`
  }
 return this.http.get<Comment[]>(url)
  }
}
