import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierAppPageRoutingModule } from './cashier-app-routing.module';

import { CashierAppPage } from './cashier-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierAppPageRoutingModule
  ],
  declarations: [CashierAppPage]
})
export class CashierAppPageModule {}
