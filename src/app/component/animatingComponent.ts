import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  standalone: true,
  selector: 'app-animated-element',
  template: `
  <div>
  <<ng-content ></ng-content>
  </div>


  `,

})
export class AnimatedElementComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}
@Input() pageP:number = 0
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  ngOnChanges():void{
    console.log("something changes")
    this.initAnimations();
  }

  initAnimations() {
    const items = this.el.nativeElement.querySelectorAll('.animated-item');

    items.forEach((item: HTMLElement, index: number) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom", // Mulai animasi saat bagian atas elemen berada di bagian bawah viewport
            toggleActions: "play none none reverse",
            markers: true,
            // Anda dapat menambahkan delay untuk efek bertahap

          }
        });
    });
  }
}
