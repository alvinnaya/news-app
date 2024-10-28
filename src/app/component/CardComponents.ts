import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'Card',
  template: `
  <a [href]="url" class="animated-item block sm:w-[22.5rem] w-[21rem] hover:scale-105 hover:shadow-main-dark transition-all duration-300 aspect-[4/5]  border-2 border-main-dark rounded-lg relative m-2 ">
  <img [src]="ImageSrc" alt="First Image"
   class=" w-[100%] m-auto h-[55%]  border-2 border-main-dark
   "
   >
   <div class="w-[30%] h-[25%] bg-main-dark absolute z-[5] top-[-5%] right-[-5%] flex flex-col
    justify-center items-center text-main-light text-4xl font-extrabold border-1"
    style="clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);"
    >
    <div class="flex flex-col w-full h-full
    justify-center items-center text-main-light text-4xl font-extrabold">
      <p class="text-xs font-light">{{year}}</p>
      <h1>{{date}}</h1>
      <p class="text-xs font-light">{{month}}</p>
    </div>

   </div>
   <div class="w-full flex items-center px-2 p-1">
      <div class="flex items-center gap-1 bg-main-dark py-1 px-2 pr-4 rounded-full text-main-light justify-center">

        <div class="text-xs line-clamp-1"> {{author}}</div>
      </div>
    </div>

   <div class="w-full  h-[35%]  ">
    <div class="w-full p-4  h-full line-clamp-3 ">
        <h1 class="text-3xl capitalize font-semibold text-main-dark line-clamp-3 relative z-10 ">{{title}}</h1>
    </div>


   </div>




  </a>
   `,
})

export class CardComponent  {
  @Input() ImageSrc:string = "https://www.zdf.de/assets/the-new-york-times-logo-102~3840x2160?cb=1703693779796";
  @Input() date: number = 10
  @Input() month: string = "september"
  @Input() year: number = 2022
  @Input() title: string = "ini judul berita untuk sememtara ini"
  @Input() author: string = "Alvian Naya Pradhana"
  @Input() summary: string = "ini ringkasan berita"
  @Input() url: string = ""







}
