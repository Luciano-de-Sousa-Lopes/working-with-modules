import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { RepeatTimesDirective } from './directives/repeat-times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './components/segment/segment.component';

@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    RepeatTimesDirective,
    SegmentComponent,
  ],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
