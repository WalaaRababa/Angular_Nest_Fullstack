import { CommentService } from './../services/comment.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import Comment from '../interface/comment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  commentService = inject(CommentService)
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
}
