import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';
import _ from 'lodash';

import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //@Input() ristMenu;
  found;
  id;
  menu=[];
  cart=[];
  total=0;
  email;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private utility: UtilityService
  ) { }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.calculateTotal();
  }

  calculateTotal(){
    this.total=0;
    _.each(this.cart, (o)=>{
      this.total += o.reservation_items[0].price;
    })
  }

  ngOnInit(): void {

    //this.menu= this.utility.ristMenu;
    

    this.route.params.subscribe(success =>{
      this.id=success
      
      //this.found = this.utility.getId(this.id)
      const id = success.id

      this.http.get("https://api.pasto.app/api/v2/utils/"+id+"/info.json").subscribe((response:any)=>{
        this.found = response.infos;
        
      })

      this.http.get("https://api.pasto.app/api/v2/utils/"+id+"/categories.json").subscribe((response:any) => {
        this.menu = response;

      })
    
    
    })
  }
}
