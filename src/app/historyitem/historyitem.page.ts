import { Component, OnInit } from '@angular/core';
import { PorductService } from '../cashier-app/porduct.service';
import { Product } from '../cashier-app/product.model';

@Component({
  selector: 'app-historyitem',
  templateUrl: './historyitem.page.html',
  styleUrls: ['./historyitem.page.scss'],
})
export class HistoryitemPage implements OnInit {
  total: number;
  products: Product;
  constructor(private servprod:PorductService) { 
  }

  ngOnInit() {
    this.products = this.servprod.sold[this.servprod.id];
    this.total = this.products.price * this.products.quantity;
  }


}
