import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight')
  color: string = 'yellow';

  @Input('bold')
  bold: boolean = false;

  constructor(private element: ElementRef) {
   }


  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    if(this.bold)
      this.element.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('click')
  onClick(){
    alert('click');
  }
}
