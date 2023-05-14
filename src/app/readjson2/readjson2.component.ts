import { Component } from '@angular/core';
import countries from './_files/json1.json';

@Component({
  selector: 'app-readjson2',
  templateUrl: './readjson2.component.html',
  styleUrls: ['./readjson2.component.css']
})
export class Readjson2Component {
  public countryList:{id:string, first_name:string,last_name:string,email:string,gender:string}[] = countries;
  p: number = 1;
  collection: any[] = countries;  

}
