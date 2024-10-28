import { Component, inject,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navabr.component';
import { ArticleLayoutComponet } from './component/articleLayoutComponent';
import { TagsLayoutComponents } from './component/TagsLayoutComponents';
import { SpecialCardComponent } from './component/SpecialCardComponent';
import { HttpClient } from '@angular/common/http';
import { fromEvent, debounceTime } from 'rxjs';
import { SpecialCardLayoutComponent } from "./component/SpecialCardLayout";
import { gsap } from 'gsap';
import { AnimatedElementComponent } from './component/animatingComponent';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ArticleLayoutComponet,
    TagsLayoutComponents, SpecialCardComponent, SpecialCardLayoutComponent,
  AnimatedElementComponent],
  template: `
  <div class="w-full h-full bg-main-light flex flex-col ">
  <div class="w-full  ">
  <navbar>

  </navbar>


  </div>



    <div class="w-full flex flex-col overflow-x-hidden   animated-container">
    <app-animated-element [pageP]="this.page">
    @for (item of items; track $index) {
        @if(this.Specialitems.results[$index]){
          <Special-Card

                [ImageSrc]="this.Specialitems.results[$index].multimedia[0]?.url"
                [date]="getDate(this.Specialitems.results[$index].published_date)"
                [month]="getMonth(this.Specialitems.results[$index].published_date)"
                [year]="getYear(this.Specialitems.results[$index].published_date)"
                [title]="this.Specialitems.results[$index].title"
                [author]="this.Specialitems.results[$index].byline"
                [summary]="this.Specialitems.results[$index].abstract"
                [url]="this.Specialitems.results[$index].url"

                >
          </Special-Card>
        }
      @if(item.response.docs){
        <ArticleLayout [items]="item.response.docs"></ArticleLayout>
      }


      }
      <div class="w-full flex gap-1 justify-center items-center h-[50rem] my-[10rem]">

<div class="w-[1.5rem] h-[1.5rem] bg-main-dark rounded-full animate-pulse " ></div>
<div class="w-[1.5rem] h-[1.5rem] bg-main-dark rounded-full animate-pulse"></div>
<div class="w-[1.5rem] h-[1.5rem] bg-main-dark rounded-full animate-pulse "></div>
<div class="w-[1.5rem] h-[1.5rem] bg-main-dark rounded-full animate-pulse"></div>
<div class="w-[1.5rem] h-[1.5rem] bg-main-dark rounded-full animate-pulse"></div>

</div>


    </app-animated-element>



    </div>








  </div>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private el: ElementRef) {}



  title = 'news app';
  http = inject(HttpClient);
  page:number = 0;

  items: Array<any> = [];
  Specialitems: any = [];

  loading: boolean = false;



  ngAfterViewInit() {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(100))
      .subscribe(() => this.onScroll());
  }



  onScroll() {
    const scrollTop = window.scrollY; // Posisi scroll vertikal
    const scrollHeight = document.body.scrollHeight; // Tinggi keseluruhan halaman
    const clientHeight = window.innerHeight; // Tinggi viewport

    console.log("render", scrollTop + clientHeight);
    console.log("render kedua", scrollHeight - 600);

    if (scrollTop + clientHeight >= scrollHeight - 600 && !this.loading) {
      this.loading = true;
      this.getNewsWire(this.items.length); // Asumsikan setiap permintaan mengembalikan 10 item
    }
  }

  // getIsActive(isActive: boolean) {
  //   console.log(isActive, "getValue");
  // }


  ngOnInit() {
    this.getNewsWire(0);


    const url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Puqs7hqWfqdRPFgyTnSotDCXHFLNaJWe`;

    console.log(url)
    this.http.get(url)?.subscribe((newItem: any) => {

      this.Specialitems = newItem
      console.log("special item",this.Specialitems.results)
      console.log("special item multimedia",this.Specialitems.results[0].multimedia[0]?.url)

    }, () => {

    });
  }


  getDate(dateString: string): number {
    const date = new Date(dateString);
    return date.getUTCDate();
  }

  getMonth(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long' }); // Mengembalikan nama bulan
  }

  getYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getUTCFullYear();
  }





  getNewsWire(page: number) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&sort=newest&page=${page}&api-key=Puqs7hqWfqdRPFgyTnSotDCXHFLNaJWe`;

    console.log("newsWire",url)
    this.http.get(url).subscribe((newItem: any) => {
      this.items.push(newItem);
      console.log("newsWIre", this.items)
      this.loading = false;
      this.page = page
    }, () => {
      this.loading = false;
    });
  }
}
