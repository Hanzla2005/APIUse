import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuityPageRoutingModule } from './commuity-routing.module';

import { CommuityPage } from './commuity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuityPageRoutingModule
  ],
  declarations: [CommuityPage]
})
export class CommuityPageModule {}
