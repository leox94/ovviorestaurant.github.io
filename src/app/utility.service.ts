import { Injectable } from '@angular/core';
import _ from 'lodash';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  ajaxUrl = "https://api.pasto.app/api/v2/utils/"

  restaurants=[]
  //resta = this.restaurants.slice(0,100)

  get(path){
    return this.http.get(this.ajaxUrl + path);
  }
  
  getId(id){
    return _.find(this.restaurants, (obj)=>{
      return obj.id==id;
    })
  }
  //restId = _.find(this.restaurants, function(o) { return o.id === 775; });

  //ristMenu = this.menu

  constructor(
    private http: HttpClient
  ) { }
}
