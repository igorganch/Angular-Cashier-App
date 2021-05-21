import { Injectable } from '@angular/core';
//import { receiveMessageOnPort } from 'node:worker_threads';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class PorductService {
   products: Product[] = [
    { id: 1,
      name: 'Lemon',
      quantity: 50,
      price: 2
    },
    { id: 2,
      name: 'Apple',
      quantity: 70,
      price: 1
    }, 
     { id: 3,
      name: 'Mango',
      quantity: 100,
      price: 4
    },
    { id: 4,
      name: 'Kiwi',
      quantity: 40,
      price: 3
    },

    { id: 5,
      name: 'Pants',
      quantity: 60,
      price: 20
    },
    { id: 6,
      name: 'Shoes',
      quantity: 110,
      price: 60
    },
    { id: 7,
      name: 'Hat',
      quantity: 93,
      price: 15
    }




  ];

  sold :Product[] =[];
  id:number;
getAllProducts(){
return[...this.products];
}
getProduct(id1){
return this.products.find(product => {return product.id == id1});

}

  constructor() { }
}
