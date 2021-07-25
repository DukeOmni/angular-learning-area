import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  private backgroundColor:String;

  @HostListener("mouseover") onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement,"background-color","yellow") Repeated code
    this.backgroundColor='yellow'
  }  
  @HostListener("mouseout") onMouseOut(){
    // this._renderer.setStyle(this._elementRef.nativeElement,"background-color","white") repeated code
    this.backgroundColor='white'
  }
  //binds a class, style, etc object into a method or a atribute of this class
  //provided the html element uses this directive
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) { 

  }

}
