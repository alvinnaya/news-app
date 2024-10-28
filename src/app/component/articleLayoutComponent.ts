import { Component, OnInit, SimpleChanges,Input } from '@angular/core';
import { CardComponent } from './CardComponents';
import { AnimatedElementComponent } from './animatingComponent';

@Component({
  standalone: true,
  imports: [CardComponent, AnimatedElementComponent],
  selector: 'ArticleLayout',
  template: `
  <div class="w-full md:w-[80rem] m-auto flex my-4 flex-wrap  gap-6 relative md:justify-normal justify-center">


  @for (item of items; track $index) {

    @if($index < 9){



      <Card
  [ImageSrc]="'https://static01.nyt.com/' + item.multimedia[0]?.url"
  [date]="getDate(item.pub_date)"
  [month]="getMonth(item.pub_date)"
  [year]="getYear(item.pub_date)"
  [title]="item.headline.main"
  [author]="item.byline.original"
  [summary]="item.abstract"
  [url]="item.web_url"


  >
</Card>


    }


  }










  </div>

  `,

})

export class ArticleLayoutComponet  {
  @Input() items: any[] = [];

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



}
