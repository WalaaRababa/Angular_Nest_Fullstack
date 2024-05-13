import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http=inject(HttpClient)
  private url='http://localhost:3000/'
CreateUser(name:string)
{
return this.http.post<User>(this.url+'user',{name})
}
savedToLocalStorage(user:User)
{
  localStorage.setItem('thread_user',JSON.stringify(user))
}
getUserFromStorage()
{
  const user=localStorage.getItem('thread_user')
  return user?JSON.parse(user)as User:null
}
}
