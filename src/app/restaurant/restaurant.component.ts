import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(
    private utility: UtilityService,
    private http: HttpClient
  ) { }

  restaurants = [];
  rest2 = [];
  rest3 = [];
  rest4 = [];

  ngOnInit(): void {

    this.utility.get("724/partners.json").subscribe((response:any) =>{
      this.restaurants = response.slice(0,10);
    })

    this.utility.get("724/partners.json").subscribe((response:any) =>{
      this.rest2 = response.slice(10,20);
    })

    this.utility.get("724/partners.json").subscribe((response:any) =>{
      this.rest3 = response.slice(20,30);
    })

    this.utility.get("724/partners.json").subscribe((response:any) =>{
      this.rest4 = response.slice(30,40);
    })
  }

}
