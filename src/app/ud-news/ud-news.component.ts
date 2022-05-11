import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { IRssItem } from '../news/news-rss';

@Component({
  selector: 'en-ud-news',
  templateUrl: './ud-news.component.html',
  styleUrls: ['./ud-news.component.less']
})
export class UDNewsComponent implements OnInit {

  news$: Observable<IRssItem[]>;
  name$: Observable<string[]>; 

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.news$ = this.dataService.getUD();

  }
}
