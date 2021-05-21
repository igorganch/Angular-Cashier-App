import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restockhistory',
  templateUrl: './restockhistory.page.html',
  styleUrls: ['./restockhistory.page.scss'],
})
export class RestockhistoryPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  history(){
    this.router.navigate(['history']);
  }
  restock(){


    this.router.navigate(['restock']);
  }

}
