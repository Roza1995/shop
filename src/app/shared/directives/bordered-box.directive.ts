import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderedBox]'
})
export class BorderedBoxDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { 
      //this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px solid red');
  }

  
  @HostListener('mouseenter') public addBorder(){
    this.setBorder('3px solid red');
  }

  @HostListener('mouseleave') public removeBorder(){
    this.setBorder('');
  }

  private setBorder(value: string){
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border', value);
  }




}
