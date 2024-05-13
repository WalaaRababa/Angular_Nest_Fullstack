import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
@Input() placeholder='write something here';
@Input() buttonText='Create'
@Output() formSubmitted=new EventEmitter<{text:string}>()

handelSubmit(event:SubmitEvent)
{
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const textAreaElement=form.elements.namedItem('text') as HTMLTextAreaElement
 const commentText=textAreaElement.value;
  form.reset()

this.formSubmitted.emit({text:commentText})
}
}
