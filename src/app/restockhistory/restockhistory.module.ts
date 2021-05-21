import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestockhistoryPageRoutingModule } from './restockhistory-routing.module';

import { RestockhistoryPage } from './restockhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestockhistoryPageRoutingModule
  ],
  declarations: [RestockhistoryPage]
})
export class RestockhistoryPageModule {}
