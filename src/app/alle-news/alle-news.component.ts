import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { IRssItem } from '../news/news-rss';
import { DataService } from '../services/data.service';

@Component({
  selector: 'en-alle-news',
  templateUrl: './alle-news.component.html',
  styleUrls: ['./alle-news.component.less']
})
export class AlleNewsComponent implements OnInit {

  news$: Observable<IRssItem[]>;
  name$: Observable<string[]>; 

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    const ud$ = this.dataService.getUD();
    const bmuv$ = this.dataService.getBMUV();
    const gfm$ = this.dataService.getGFM(); 

    this.news$ = forkJoin([ud$, bmuv$, gfm$]).pipe(
      map(([ud, bmuv, gfm]) => ud.concat(bmuv, gfm)),
      map((data: IRssItem[]) => data.sort((a, b) => a.pubDate > b.pubDate ? -1 : 1))
    );
  }
}
