import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowForm]'
})
export class ShowFormDirective {

  constructor(private elementRef: ElementRef, 
                private renderer2: Renderer2) { }
                

  @HostListener('click') public onClick(){
    this.renderer2.setStyle(this.elementRef.nativeElement.querySelector('.form-group'),'display','block')
  } 
}
