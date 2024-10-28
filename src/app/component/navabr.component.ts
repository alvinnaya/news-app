import { Component, OnInit, output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'navbar',
    standalone: true,
    template: `
    <div class="w-full h-[4rem] bg-main-light border-b-2 border-main-dark flex
    justify-between items-center
    " >

      <div class="text-xl mx-6 my-4 font-extrabold">
          Logo
      </div>


      <div class="mx-6 h-full font-normal flex flex-nowrap  justify-center items-center">
        <a class="hover:bg-main-dark hover:text-main-light text-xl text-main-dark  h-full  flex justify-center items-center w-[8rem] px-2  cursor-pointer duration-200 transition-all">Tech</a>
        <a class="hover:bg-main-dark hover:text-main-light text-xl text-main-dark h-full flex justify-center items-center w-[8rem]  px-2  cursor-pointer duration-200 transition-all">Economy</a>
        <a class="hover:bg-main-dark hover:text-main-light text-xl text-main-dark h-full flex justify-center items-center w-[8rem]  px-2  cursor-pointer duration-200 transition-all">Politics</a>

      </div>
      <!-- <button (click)="togleActive()"
      class="text-xl mx-6 my-4 font-bold cursor-pointer">
          {{isActive}}
      </button> -->

     </div>
    `
})

export class NavbarComponent {
  isActive: boolean = true;
  isActiveOutput = output<boolean>()


  togleActive(){

    this.isActive = !this.isActive;
    this.isActiveOutput.emit(this.isActive)

  }
constructor(){
  console.log("first implement")
}
  ngOnChanges(changes:SimpleChanges) {
    console.log("hii" ,changes)
  }





}






