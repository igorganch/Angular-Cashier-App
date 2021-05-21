import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierAppPage } from './cashier-app.page';

const routes: Routes = [
  {
    path: '',
    component: CashierAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierAppPageRoutingModule {}
