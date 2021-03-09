import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {AddNewsComponent} from './add-news/add-news.component'
import {UpdateNewsComponent} from './update-news/update-news.component'
import {NewsListComponent} from './news-list/news-list.component'

const routes: Routes = [
  {
      component: AddNewsComponent,
      path:'add'
  },
 
{
  component: UpdateNewsComponent,
  path:'update/:id'
},
{
  component: NewsListComponent,
  path:'list'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
