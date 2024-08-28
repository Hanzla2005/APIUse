import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCommunityPageRoutingModule } from './new-community-routing.module';

import { NewCommunityPage } from './new-community.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCommunityPageRoutingModule
  ],
  declarations: [NewCommunityPage]
})
export class NewCommunityPageModule {}
