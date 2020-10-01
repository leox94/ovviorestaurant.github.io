import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UtilityService } from '../utility.service';
import _ from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu;
  @Input() cart;
  
  

  constructor(
    private utility: UtilityService
  ) { }

  addToCart(obj){
    this.cart.push(obj)
  }
  
  //menu2;

  ngOnInit(): void {
    //this.menu2= this.utility.ristMenu;
  }

}
