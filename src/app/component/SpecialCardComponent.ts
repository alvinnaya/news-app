import { Component, OnInit,Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'Special-Card',
  template: `
<a [href]="url" class="w-full flex justify-center items-center flex-col my-4  ">
  <div class="md:w-[48rem] w-full sm:h-[38rem] h-[30rem] bg-main-dark relative rounded-lg p-2 m-auto" >
    <div class="w-[70%] p-6">
      <h1 class="md:text-6xl text-5xl text-main-light font-bold z-10 relative line-clamp-4">{{title}}</h1>
      <div class="gap-2 flex h-[1.7rem] mt-4 w-[50%]  rounded-full  items-center">

        <div class="text-sm text-main-light  text-bold line-clamp-1">{{author}}</div>
      </div>
    </div>

    <div class=" w-[60%] h-[60%] absolute right-1 bottom-1 object-cover">
      <img class="w-full h-full object-cover rounded-lg"  [src]="ImageSrc">
      <div class="w-full h-full bg-main-dark rounded-lg absolute right-0 bottom-0 opacity-60"></div>
    </div>

    <div class=" absolute bottom-0 left-0 w-[38%] h-[50%] p-6 mt-6 px-6 text-xs text-main-light font-light">
          <p  class="line-clamp-4">
            {{summary}}

          </p>
    </div>

    <div class="w-[30%] h-[25%]  absolute z-[5] top-[0%] right-[0%] flex flex-col
    justify-center items-center text-main-light text-4xl font-extrabold border-1"
    style=""
    >
    <div class="flex flex-col w-full h-full
    justify-center items-center text-main-light text-6xl font-extrabold">
      <p class="text-sm font-light">{{year}}</p>
      <h1>{{date}}</h1>
      <p class="text-sm font-light">{{month}}</p>
    </div>

   </div>



  </div>
</a>
  `,
})

export class SpecialCardComponent {

  @Input() ImageSrc:string = "https://www.zdf.de/assets/the-new-york-times-logo-102~3840x2160?cb=1703693779796";
  @Input() date: number = 10
  @Input() month: string = "september"
  @Input() year: number = 2022
  @Input() title: string = "ini judul berita untuk sememtara ini"
  @Input() author: string = "Alvian Naya Pradhana"
  @Input() summary: string = `ini cerita panjang apa aja pokoknya isi beritanya seperti ini kurang lebih begitu lah
          ini cerita panjang apa aja pokoknya isi beritanya seperti ini kurang lebih begitu lah
          ini cerita panjang apa aja pokoknya isi beritanya seperti ini kurang lebih begitu lah
          ini cerita panjang apa aja pokoknya isi beritanya seperti ini kurang lebih begitu lah
          ini cerita panjang apa aja pokoknya isi beritanya seperti ini kurang lebih begitu lah`
  @Input() url: string = "https://www.google.com/"


}
