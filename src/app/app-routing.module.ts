import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'cashier-app',
    loadChildren: () => import('./cashier-app/cashier-app.module').then( m => m.CashierAppPageModule)
  },
  {
    path: '',
    redirectTo: 'cashier-app',
    pathMatch: 'full'
  },
  {
    path: 'restockhistory',
    loadChildren: () => import('./restockhistory/restockhistory.module').then( m => m.RestockhistoryPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'historyitem',
    loadChildren: () => import('./historyitem/historyitem.module').then( m => m.HistoryitemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
