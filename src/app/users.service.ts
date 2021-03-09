import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:8080/Actualities"
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
  public saveNews(req:object){
   return this.http.post(this.url,req);
  }
  public deleteNews(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  public getCurrentNews(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
}
