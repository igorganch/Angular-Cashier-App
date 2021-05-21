import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PorductService } from '../cashier-app/porduct.service';
import { Product } from '../cashier-app/product.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  products : Product[] = [];

  selected: Product;

  quantity:string ='';
  constructor(private servprod:PorductService,public alertController: AlertController, private router:Router) { 
  }

  ngOnInit() {
   this.products = this.servprod.products;
    
  }
  item_selected(prod){
      this.selected = prod;

  }

 async onSubmit(form: NgForm){
  if(typeof(this.selected) == "undefined"){
    const alert = await this.alertController.create({

      cssClass : 'my-custom-class',
      header: 'Error',
      subHeader: 'Please choose an item',
      buttons:['OK']
      
      });

      await alert.present();
    }
    else if(form.value.quantity == ''){
      const alert = await this.alertController.create({

        cssClass : 'my-custom-class',
        header: 'Error',
        subHeader: 'Please choose an amount',
        buttons:['OK']
        
        });
  
        await alert.present();
      }else{
  console.log(form.value.quantity);
  var index;
  for(let i=0 ; i < this.products.length; i++){
    if(this.selected.id == this.products[i].id){
            this.products[i].quantity = parseInt(form.value.quantity)
    }
  }

this.servprod.products = this.products;



const alert = await this.alertController.create({

  cssClass : 'my-custom-class',
  header: 'Success',
  subHeader: 'Quantity of '+ this.selected.name +  ' has been updated',
  buttons:['OK']
  
  });

  await alert.present();
  this.quantity = '';
  this.selected = undefined;
  
      }
      
  }

}
