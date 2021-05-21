import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestockhistoryPage } from './restockhistory.page';

const routes: Routes = [
  {
    path: '',
    component: RestockhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestockhistoryPageRoutingModule {}
