import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRssItem } from '../news/news-rss';
import { DataService } from '../services/data.service';

@Component({
  selector: 'en-bmuv-news',
  templateUrl: './bmuv-news.component.html',
  styleUrls: ['./bmuv-news.component.less']
})
export class BmuvNewsComponent implements OnInit {

  news$: Observable<IRssItem[]>

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.news$ = this.dataservice.getBMUV(); 

  }

}
