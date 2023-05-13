import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Repos {
  _id:string | undefined 
  __v: number| undefined
  user:string| undefined 
  text:string| undefined 
  source: string| undefined
  updatedAt: string| undefined
  type:string| undefined 
  createdAt:string| undefined 
  deleted:boolean| undefined 
  used: boolean| undefined
}


@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
 
  userName: string = "tektutorialshub"
  baseURL: string = "https://cat-fact.herokuapp.com/facts";
  repos: Repos[] | undefined;
 
  
  constructor(private http: HttpClient) {
  }
 
  ngOnInit() {
    this.getRepos()
  }
 
 
  public getRepos() {
 
    return this.http.get<Repos[]>(this.baseURL)
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repos = response; 
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }
}
