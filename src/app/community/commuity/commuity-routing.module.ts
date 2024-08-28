import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommuityPage } from './commuity.page';

const routes: Routes = [
  {
    path: '',
    component: CommuityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommuityPageRoutingModule {}
