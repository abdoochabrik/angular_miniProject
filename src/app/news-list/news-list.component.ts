import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor( private user:UsersService) { }
  public data:any;
  ngOnInit(): void {
    this.user.getData().subscribe(users=>{
      console.warn(users);
      this.data=users;
    })

  }
  deleteNews(item:any){
      this.user.deleteNews(item).subscribe((result) => {
        console.warn("result", result);
      })
  }
  }


