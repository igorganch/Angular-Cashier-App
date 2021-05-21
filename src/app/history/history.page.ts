import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorductService } from '../cashier-app/porduct.service';
import { Product } from '../cashier-app/product.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  products : Product[] = [];

  quantity:string ='';
  constructor(private servprod:PorductService, private router:Router) { 
  }

  ngOnInit() {
    this.products = this.servprod.sold;
  }

  item_selected(prod){
    var index;

  
    for(var i =0; i < this.products.length; i++){
      if(prod.id == this.products[i].id && prod.quantity == this.products[i].quantity){
        index =i;

      }

    }
 
    this.servprod.id = index;
    this.router.navigate(['historyitem']);

    
  }

}
