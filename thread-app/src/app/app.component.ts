import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thread-app';
  userService=inject(UserService)
  constructor(){
    const user=this.userService.getUserFromStorage()
    if(!user)
      {
        const random_Number=Math.ceil(Math.random()*400+100)
        const random_User=`user_${random_Number}`
        this.userService.CreateUser(random_User).subscribe(user=>
          {
this.userService.savedToLocalStorage(user)
          },error=>
            {
              console.log(error);
              
            }
        )
      }
  }
}
