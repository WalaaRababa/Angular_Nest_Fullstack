import { Component,Input,effect,inject, signal } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import Comment from '../../interface/comment'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  commentService = inject(CommentService);
// @ Input() comment!:Comment;
@Input() comment!: Comment;
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
}
