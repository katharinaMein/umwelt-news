import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { IRssItem } from '../news/news-rss';

@Component({
  selector: 'gfm-news',
  templateUrl: './gfm-news.component.html',
  styleUrls: ['./gfm-news.component.less']
})
export class GFMNewsComponent implements OnInit {

  news$: Observable<IRssItem[]>;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.news$ = this.dataService.getGFM();

  }
}
