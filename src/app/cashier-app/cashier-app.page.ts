import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PorductService } from './porduct.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-cashier-app',
  templateUrl: './cashier-app.page.html',
  styleUrls: ['./cashier-app.page.scss'],
})
export class CashierAppPage implements OnInit {
  selected :Product;
  total:number =0;
  type :string ='';
  products : Product[] = [];
  inputQuantity: boolean = false;

  quantity:string ='';
  constructor(private servprod:PorductService, public alertController: AlertController, private router:Router) { 

  }

  ngOnInit() {
   this.products = this.servprod.products;
   for (let i = 0 ; i < this.servprod.products.length; i++){
    console.log(this.servprod.products[i].name + " " +this.servprod.products[i].quantity + this.servprod.products[i].price)
  }
  }

async presentAlert(){

const alert = await this.alertController.create({

cssClass : 'my-custom-class',
header: 'Alert',
subHeader: 'subtitle',
message: 'this is an alert message',
buttons:['OK']

});


}
  async number_clicked(event: any){
    if(typeof(this.selected) != "undefined"){
   this.quantity += event.target.value;
    this.total += this.selected.price * parseInt(this.quantity);
    this.inputQuantity = true
    }
    else{
      const alert = await this.alertController.create({

        cssClass : 'my-custom-class',
        header: 'Error',
        subHeader: 'Please choose an item',
        buttons:['OK']
        
        });

        await alert.present();
    
      
    }
  }

  async item_selected(prod){


        if(typeof(this.selected) != "undefined" && this.inputQuantity == true && 0 <= (this.selected.quantity - parseInt(this.quantity))){
         
          var temp: Product = { id: this.selected.id,
              name:  this.selected.name,
              quantity:  parseInt(this.quantity),
              price: this.selected.price
            };



            this.servprod.sold.push(temp);
            this.selected.quantity-=parseInt(this.quantity)
          
            this.selected = prod;
            this.quantity ='';
            this.type = this.selected.name;
            this.inputQuantity = false;
            for(let i = 0 ; i < this.servprod.sold.length; i++){
            }
        }
        else if (typeof(this.selected) == "undefined"){
        this.selected = prod;
        this.type = this.selected.name;
        console.log(this.selected.price);
        }
        else if(this.inputQuantity == false){
          const alert = await this.alertController.create({

            cssClass : 'my-custom-class',
            header: 'Error',
            subHeader: 'Please choose quantity',
            buttons:['OK']
            
            });
    
            await alert.present();
        }
        else if(0 > (this.selected.quantity - parseInt(this.quantity))){
          const alert = await this.alertController.create({

            cssClass : 'my-custom-class',
            header: 'Error',
            subHeader: 'Quantity exceeds stock',
            buttons:['OK']
            
            });
    
            await alert.present();
            this.total = this.total - (this.selected.price * parseInt(this.quantity))
            this.quantity = '';
           

        }


  }

  manager(){
this.router.navigate(['restockhistory']);
  }
 async buy(){

  var tf= true;
        if(typeof(this.selected) == "undefined"){
          const alert = await this.alertController.create({

            cssClass : 'my-custom-class',
            header: 'Error',
            subHeader: 'Please choose ',
            buttons:['OK']
            
            });
    
            await alert.present();

              tf = false
        }
        else if(this.quantity != '' && 0 <= (this.selected.quantity - parseInt(this.quantity))){
          var temp: Product = { id: this.selected.id,
            name:  this.selected.name,
            quantity:  parseInt(this.quantity),
            price: this.selected.price
          };
          this.servprod.sold.push(temp);
          this.selected.quantity-=parseInt(this.quantity);
          this.servprod.products = this.products;
          this.quantity = '';
          this.total = 0;
          this.type ='';
          this.selected = undefined;
        }
        else if(0 > (this.selected.quantity - parseInt(this.quantity))){
          const alert = await this.alertController.create({

            cssClass : 'my-custom-class',
            header: 'Error',
            subHeader: 'Quantity exceeds stock',
            buttons:['OK']
            
            });
    
            await alert.present();
            this.total = this.total - (this.selected.price * parseInt(this.quantity))
            this.quantity = '';
          
        }
        else{

          const alert = await this.alertController.create({

            cssClass : 'my-custom-class',
            header: 'Error',
            subHeader: 'Please choose quantity',
            buttons:['OK']
            
            });
    
            await alert.present();

        }



  }

}
