import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryitemPageRoutingModule } from './historyitem-routing.module';

import { HistoryitemPage } from './historyitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryitemPageRoutingModule
  ],
  declarations: [HistoryitemPage]
})
export class HistoryitemPageModule {}
