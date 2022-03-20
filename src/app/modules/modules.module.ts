import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './components/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [ModulesHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModulesRoutingModule, SharedModule],
})
export class ModulesModule {}
