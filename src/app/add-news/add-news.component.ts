import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
alert:boolean=false;
  addNews= new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    author: new FormControl(''),
    country: new FormControl(''),
    language: new FormControl(''),
    category: new FormControl('')
  })
  constructor(private news:UsersService) { }

  ngOnInit(): void {}
    collectNews(){
      //console.warn(this.addNews.value);
      this.news.saveNews(this.addNews.value).subscribe((res) => {
        //console.warn("result is here", res);
        this.alert=true;
        this.addNews.reset({});
      })
    
  }
   closeAlert(){
     this.alert=false;
   }
  }

