import { IRssItem } from './news-rss';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent {
  @Input() news: IRssItem[];

  constructor() {}

  getDate(date: string): Date{
    return new Date(date); 
  }
}