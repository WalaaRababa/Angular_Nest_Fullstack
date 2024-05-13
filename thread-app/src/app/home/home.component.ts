import { CommentService } from '../services/comment.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import Comment from '../interface/comment';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent,CommentFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  commentService = inject(CommentService)
  userService=inject(UserService)
  comments = signal<Comment[]>([])
  ngOnInit(): void {
    this.getComments()
  }
  getComments() {
    this.commentService.getComment().subscribe(res => {
      this.comments.set(res)
    }, error => {
      console.log(error);

    }
    )
  }
  createComment(formValues:{text:string})
{
  // console.log(formValues);
  const {text}=formValues
  const userId=this.userService.getUserFromStorage()
  if(!userId)
    {
      return
    }
    this.commentService.createComment({title:text,user:userId._id}).subscribe(res=>
      {
        this.comments.set([res,...this.comments()])
      },error=>
        {
          console.log(error);
          
        }
    )

}
}
