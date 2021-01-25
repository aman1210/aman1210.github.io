import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;
  initialTop: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    console.log(this.eleRef.nativeElement.getBoundingClientRect().bottom);
    console.log(this.eleRef.nativeElement.getBoundingClientRect().top + 'top');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.bottom =
      window.scrollY * this.parallaxRatio + 'px';
    console.log(this.eleRef.nativeElement.style.top);
  }
}
