import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TimesToRepeatDirective } from './directives/times-to-repeat.directive';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceHolderComponent,
    TimesToRepeatDirective,
    SegmentComponent,
  ],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
