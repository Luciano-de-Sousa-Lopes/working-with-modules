import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]',
})
export class RepeatTimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appRepeatTimes') set render(times: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
