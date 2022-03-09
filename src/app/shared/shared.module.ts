import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DividerComponent } from './divider/divider.component';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';

@NgModule({
  declarations: [NavigationBarComponent, DividerComponent, TabsNavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavigationBarComponent, DividerComponent, TabsNavComponent],
})
export class SharedModule {}
