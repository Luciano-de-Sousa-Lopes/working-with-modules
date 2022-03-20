import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
