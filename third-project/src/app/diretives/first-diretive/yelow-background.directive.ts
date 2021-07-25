import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[yelowBackground]'
})
export class YelowBackgroundDirective {

  constructor(private _elementRef:ElementRef,
              private _rederer:Renderer2) { 
    console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor="yellow"; Unsafe method 
    this._rederer.setStyle(this._elementRef.nativeElement,"background-color","yellow")
  }

}
