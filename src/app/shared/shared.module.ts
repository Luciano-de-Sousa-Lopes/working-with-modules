import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [NavigationBarComponent]
})
export class SharedModule { }
