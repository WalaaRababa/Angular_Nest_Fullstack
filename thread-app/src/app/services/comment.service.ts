import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Comment from '../interface/comment';
type creatECommentDTO={
  parentId?:string;
  user:string;
  title:string;
  }
@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http :HttpClient) { }
  private url='http://localhost:3000/comment'
  // http = inject(HttpClient)
  getComment(parentId:string='')
  {
    let url='http://localhost:3000/comment'
if(parentId)
  {
    url+=`?parentId=${parentId}`
  }
 return this.http.get<Comment[]>(url)
  }
  createComment(comment:creatECommentDTO)
  {
return this.http.post<Comment>(this.url,comment)
  }
}
