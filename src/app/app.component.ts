import { Component } from '@angular/core';
import { from } from 'rxjs';
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApi';
  public data:any;
  constructor(private user:UsersService){
    this.user.getData().subscribe(users=>{
      console.warn(users);
      this.data=users;
    })
  }
 
 
}
