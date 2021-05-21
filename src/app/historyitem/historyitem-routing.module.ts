import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryitemPage } from './historyitem.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryitemPageRoutingModule {}
