import { UserService } from '../../services/user.service';
import { Component,Input,effect,inject, signal } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import Comment from '../../interface/comment'
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  commentService = inject(CommentService);
// @ Input() comment!:Comment;
@Input() comment!: Comment;
userService=inject(UserService)
isReplying=signal(false);
isExpanding=signal(false)
nestedComments=signal<Comment[]>([])
nestedCommentsEffect =effect(()=>
{
  if(this.isExpanding())
    {
      this.commentService
      .getComment(this.comment._id)
      .subscribe((comments) => {
        this.nestedComments.set(comments);
      });
      }
})
toggleExpanding()
{
  this.isExpanding.set(!this.isExpanding())
}
toggleReplying() {
  this.isReplying.set(!this.isReplying());
  if (this.isReplying()) {
    this.isExpanding.set(true);
  }
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
    this.commentService.createComment({title:text,user:userId._id,parentId:this.comment._id}).subscribe(res=>
      {
this.nestedComments.set([res,...this.nestedComments()])
      },error=>
        {
          console.log(error);
          
        }
    )

}
}
