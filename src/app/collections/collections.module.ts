import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { TableComponent } from './Components/table/table.component';
import { TabsComponent } from './Components/tabs/tabs.component';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, TabsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [],
})
export class CollectionsModule {}
