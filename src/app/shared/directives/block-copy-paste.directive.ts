import { Directive, ElementRef,  HostListener} from '@angular/core';

@Directive({
  selector: '[appBlockCopyPaste]'
})
export class BlockCopyPasteDirective {

  constructor(private elementRef: ElementRef) { }

    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
      event.preventDefault();
    }
  
    @HostListener('copy', ['$event']) blockCopy(event: KeyboardEvent) {
      event.preventDefault();
    }
  
    @HostListener('cut', ['$event']) blockCut(event: KeyboardEvent) {
      event.preventDefault();
    }
  

}
