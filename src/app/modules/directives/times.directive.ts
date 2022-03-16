import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set times(numberOfTimes: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < numberOfTimes; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
