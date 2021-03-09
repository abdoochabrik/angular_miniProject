import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {
  editNews= new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    author: new FormControl(''),
    country: new FormControl(''),
    language: new FormControl(''),
    category: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private news:UsersService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.news.getCurrentNews(this.router.snapshot.params.id).subscribe((result) => {
    console.warn("reslult",result);
    })
  }

}
